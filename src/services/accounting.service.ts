import { prisma } from '../app';
import { ErrorMessages, PaymentSources } from '../constants';
import { NewPriceAdjustment, IPeriod, IPriceAdjustment, Periods, IPayment, NewPayment, IFindAllPaymentsRes, IReportsFindFilters } from '../types/accounting.type';
import { IPricesInfo } from '../types/subscriberAccount.type';
import { getInvoices, getNewPricesData, getPaymentsBySourceData, getPaymentsBySourceFilePath, getCurrentTariffs, getYearParams, httpError, saveInvoicesToPdf, savePaymentsToCsv } from '../utils';
import { IFindFilters } from '../types/types.type';
import { addMonths } from 'date-fns';

class AccountingService {
  async getAllPeriods(): Promise<Periods> {
    const { yearStart, yearEnd } = getYearParams();
    const result = await prisma.period.findMany({ where: { start: { gte: yearStart, lte: yearEnd } }, include: { statistics: true, payments: true }, orderBy: { start: 'desc' } });

    return result;
  }

  async addPeriod(): Promise<IPeriod> {
    const date = new Date();

    const period = await prisma.period.findFirst({ where: { start: date } });

    if (period) {
      throw httpError({
        status: 409,
        message: ErrorMessages.duplicatePeriodErr,
      });
    }

    await prisma.period.updateMany({ where: { isCurrentPeriod: true }, data: { isCurrentPeriod: false } });
    const { id } = await prisma.period.create({ data: { isCurrentPeriod: true } });
    const subscriberAccounts = await prisma.subscriberAccount.findMany();

    const subscriberAccountsTotalCount = await prisma.subscriberAccount.count();
    const residents = subscriberAccounts.reduce((acc, { residents }) => acc + residents, 0);

    const newStatisticsItem = {
      periodId: id,
      residents,
      subscriberAccounts: subscriberAccountsTotalCount,
      adjustment: 0,
      balanceEnd: 0,
      balanceStart: 0,
    };

    await prisma.statistics.create({ data: newStatisticsItem });

    const result = await prisma.period.findUnique({ where: { id }, include: { statistics: true } });

    if (!result) {
      throw httpError({
        status: 404,
        message: ErrorMessages.periodNotFound,
      });
    }

    return result;
  }

  async getPrices(): Promise<IPricesInfo> {
    const result = await prisma.subscriberAccount.findFirst({ include: { prices: true } });

    if (!result || !result.lastCalculate) {
      throw httpError({
        status: 404,
        message: ErrorMessages.priceNotFound,
      });
    }

    return {
      lastCalculate: result.prices[0].date,
    };
  }

  async calculatePrices(): Promise<IPricesInfo> {
    const currentTariffs = await getCurrentTariffs();
    const subscriberAccounts = await prisma.subscriberAccount.findMany({ include: { owner: true, house: { include: { street: true } } } });
    const currentPeriod = await prisma.period.findFirst({ where: { isCurrentPeriod: true } });

    if (!currentPeriod) {
      throw httpError({
        status: 404,
        message: ErrorMessages.periodNotFound,
      });
    }

    const newPricesData = getNewPricesData({ subscriberAccounts, currentTariffs, currentPeriod });

    const result = await prisma.price.createMany({ data: newPricesData });

    return {
      lastCalculate: newPricesData[0].date,
    };
  }

  async addPriceAdjustment(data: NewPriceAdjustment): Promise<IPriceAdjustment> {
    const result = await prisma.priceAdjustment.create({ data });

    return result;
  }

  async getAllPayments({ skip, take }: IFindFilters): Promise<IFindAllPaymentsRes> {
    const result = await prisma.payment.findMany({
      orderBy: { date: 'desc' },
      include: { subscriberAccount: { include: { house: { include: { street: true } }, owner: true } }, period: true },
      skip,
      take,
    });
    const count = await prisma.payment.count();

    return {
      data: result,
      count,
    };
  }

  async addPayment(data: NewPayment): Promise<IPayment> {
    const period = await prisma.period.findFirst({
      where: {
        isCurrentPeriod: true,
      },
    });

    if (!period) {
      throw httpError({
        status: 404,
        message: ErrorMessages.periodNotFound,
      });
    }

    const result = await prisma.payment.create({ data: { ...data, periodId: period.id } });

    await prisma.subscriberAccount.update({
      where: { id: result.subscriberAccountId },
      data: {
        balance: {
          decrement: result.amount,
        },
      },
    });

    return result;
  }

  async getInvoices(): Promise<string> {
    const subscriberAccounts = await prisma.subscriberAccount.findMany({ include: { house: { include: { street: true } }, owner: true } });
    const generalSettings = await prisma.generalSettings.findFirst();
    const period = await prisma.period.findFirst({ where: { isCurrentPeriod: true } });

    if (!generalSettings) {
      throw httpError({
        status: 404,
        message: ErrorMessages.generalSettingsNotFound,
      });
    }

    if (!period) {
      throw httpError({
        status: 404,
        message: ErrorMessages.periodNotFound,
      });
    }

    const invoices = getInvoices({ subscriberAccounts, generalSettings, period });
    const filePath = saveInvoicesToPdf(invoices);

    return filePath;
  }

  async getPaymentsBySource(paymentSource: PaymentSources): Promise<string> {
    const result = await prisma.payment.findMany({
      where: { source: paymentSource, period: { isCurrentPeriod: true } },
      include: { subscriberAccount: { include: { house: { include: { street: true } }, owner: true } } },
    });

    const payments = getPaymentsBySourceData(result);
    const filePath = getPaymentsBySourceFilePath(paymentSource);

    await savePaymentsToCsv({ filePath, payments });

    return filePath;
  }

  async getReportsByStreets({ from, to }: IReportsFindFilters) {
    const fromDate = new Date(from);
    const toDate = new Date(to);
    const periodStart = fromDate;
    const periodEnd = addMonths(toDate, 1);
  }
}

export default AccountingService;
