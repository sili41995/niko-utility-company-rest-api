import { prisma } from '../app';
import { ErrorMessages, PaymentSources } from '../constants';
import { IPayment, NewPayment, IFindAllPaymentsRes, NewPayments } from '../types/payment.type';
import { IPricesInfo } from '../types/subscriberAccount.type';
import {
  getInvoicesMarkup,
  getNewPricesData,
  getPaymentsBySourceData,
  getPaymentsBySourceFilePath,
  getCurrentTariffsId,
  getYearParams,
  httpError,
  saveDataToPdf,
  savePaymentsToCsv,
  getNewPeriodSubscriberAccountBalancesData,
  getFilterByPeriod,
  getReportByStreet,
  getReportsByStreetsMarkup,
  getReportByHouse,
  getReportsByHousesMarkup,
  getReportBySubscriber,
} from '../utils';
import { IFindFilters, ITimePeriod } from '../types/types.type';
import { IPeriod, Periods } from '../types/period.type';
import { IPriceAdjustment, NewPriceAdjustment } from '../types/priceAdjustment.type';
import { IReportsBySubscribersFindFilters } from '../types/report.type';

class AccountingService {
  async getAllPeriods(): Promise<Periods> {
    const { yearStart, yearEnd } = getYearParams();
    const result = await prisma.period.findMany({ where: { start: { gte: yearStart, lte: yearEnd } }, include: { payments: true }, orderBy: { start: 'desc' } });

    return result;
  }

  async addPeriod(): Promise<IPeriod> {
    const date = new Date();
    //check isExist period
    const period = await prisma.period.findFirst({ where: { start: date } });

    if (period) {
      throw httpError({
        status: 409,
        message: ErrorMessages.duplicatePeriodErr,
      });
    }

    const currentPeriod = await prisma.period.findFirst({ where: { isCurrentPeriod: true } });

    const result = await prisma.period.create({ data: { isCurrentPeriod: true } });

    if (currentPeriod) {
      await prisma.period.update({ where: { id: currentPeriod.id }, data: { isCurrentPeriod: false } });

      const subscriberAccounts = await prisma.subscriberAccount.findMany({
        include: {
          owner: true,
          house: { include: { street: true } },
          payments: { include: { period: true } },
          prices: { include: { period: true, tariff: true } },
          priceAdjustments: { include: { period: true } },
          balances: { include: { period: true }, orderBy: { createdAt: 'desc' } },
        },
      });
      const balancesData = getNewPeriodSubscriberAccountBalancesData({ subscriberAccounts, currentPeriodId: result.id, prevPeriodId: currentPeriod.id });
      await prisma.balance.createMany({ data: balancesData });
    }

    return result;
  }

  async getPrices(): Promise<IPricesInfo | null> {
    const result = await prisma.price.findFirst({ orderBy: { date: 'desc' } });
    const lastCalculateInfo = result
      ? {
          lastCalculate: result.date,
        }
      : null;

    return lastCalculateInfo;
  }

  async addPrices(): Promise<IPricesInfo> {
    const currentPeriod = await prisma.period.findFirst({ where: { isCurrentPeriod: true } });

    if (!currentPeriod) {
      throw httpError({
        status: 404,
        message: ErrorMessages.periodNotFound,
      });
    }

    const currentTariffsId = await getCurrentTariffsId();
    const subscriberAccounts = await prisma.subscriberAccount.findMany({
      include: {
        owner: true,
        balances: { include: { period: true } },
        prices: { include: { period: true, tariff: true } },
        house: { include: { street: true } },
        priceAdjustments: { include: { period: true } },
        payments: { include: { period: true } },
      },
    });

    const newPricesData = getNewPricesData({ subscriberAccounts, currentTariffsId, currentPeriod });

    await prisma.price.createMany({ data: newPricesData });

    return {
      lastCalculate: newPricesData[0].date,
    };
  }

  async addPriceAdjustment(data: NewPriceAdjustment): Promise<IPriceAdjustment> {
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

    const result = await prisma.priceAdjustment.create({ data: { ...data, periodId: period.id }, include: { period: true } });

    return result;
  }

  async getAllPayments({ skip, take }: IFindFilters): Promise<IFindAllPaymentsRes> {
    const result = await prisma.payment.findMany({
      orderBy: { date: 'desc' },
      include: {
        subscriberAccount: {
          include: {
            owner: true,
            balances: { include: { period: true } },
            payments: { include: { period: true } },
            house: { include: { street: true } },
            prices: { include: { period: true, tariff: true } },
            priceAdjustments: { include: { period: true } },
          },
        },
        period: true,
      },
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

    const result = await prisma.payment.create({ data: { ...data, periodId: period.id }, include: { period: true } });

    return result;
  }

  async addPayments(data: NewPayments): Promise<number> {
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

    const updatedData = data.map((item) => ({ ...item, periodId: period.id }));

    const result = await prisma.payment.createMany({ data: updatedData });

    return result.count;
  }

  async getInvoices(): Promise<string> {
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

    const subscriberAccounts = await prisma.subscriberAccount.findMany({
      include: {
        owner: true,
        house: { include: { street: true } },
        prices: { include: { period: true, tariff: true } },
        balances: { include: { period: true } },
        priceAdjustments: { include: { period: true } },
        payments: { include: { period: true } },
      },
    });

    const invoicesMarkup = getInvoicesMarkup({ subscriberAccounts, generalSettings, period });
    const filePath = saveDataToPdf({ content: invoicesMarkup, fileName: 'invoices.pdf' });

    return filePath;
  }

  async getPaymentsBySource(paymentSource: PaymentSources): Promise<string> {
    const result = await prisma.payment.findMany({
      where: { source: paymentSource, period: { isCurrentPeriod: true } },
      include: {
        period: true,
        subscriberAccount: {
          include: {
            owner: true,
            balances: { include: { period: true } },
            house: { include: { street: true } },
            prices: { include: { period: true, tariff: true } },
            priceAdjustments: { include: { period: true } },
            payments: { include: { period: true } },
          },
        },
      },
    });

    const payments = getPaymentsBySourceData(result);
    const filePath = getPaymentsBySourceFilePath(paymentSource);

    await savePaymentsToCsv({ filePath, payments });

    return filePath;
  }

  async getReportsByStreets(timePeriod: ITimePeriod) {
    const { filterByPeriod, filterByPeriodDate } = getFilterByPeriod(timePeriod);

    const targetPeriods = await prisma.period.findMany({ where: filterByPeriodDate, orderBy: { start: 'asc' } });

    const streets = await prisma.street.findMany({
      include: {
        subscriberAccounts: {
          include: {
            owner: true,
            house: { include: { street: true } },
            payments: { ...filterByPeriod, orderBy: { date: 'asc' } },
            balances: { ...filterByPeriod, include: { period: true }, orderBy: { createdAt: 'asc' } },
            prices: { ...filterByPeriod, include: { tariff: true, period: true }, orderBy: { date: 'asc' } },
            priceAdjustments: { ...filterByPeriod, include: { period: true }, orderBy: { date: 'asc' } },
          },
        },
      },
    });

    const startingPeriodId = targetPeriods[0].id;
    const reportsByStreetsData = streets.map(({ subscriberAccounts, ...street }) => getReportByStreet({ subscriberAccounts, street, startingPeriodId }));
    const reportsByStreetsMarkup = getReportsByStreetsMarkup({ reportsByStreetsData, targetPeriods });
    const filePath = saveDataToPdf({ content: reportsByStreetsMarkup, fileName: 'reports-streets.pdf', landscape: true });

    return filePath;
  }

  async getReportsByHouses(timePeriod: ITimePeriod) {
    const { filterByPeriod, filterByPeriodDate } = getFilterByPeriod(timePeriod);

    const targetPeriods = await prisma.period.findMany({ where: filterByPeriodDate, orderBy: { start: 'asc' } });

    const houses = await prisma.house.findMany({
      include: {
        street: true,
        subscriberAccounts: {
          include: {
            owner: true,
            house: { include: { street: true } },
            payments: { ...filterByPeriod, orderBy: { date: 'asc' } },
            balances: { ...filterByPeriod, include: { period: true }, orderBy: { createdAt: 'asc' } },
            prices: { ...filterByPeriod, include: { tariff: true, period: true }, orderBy: { date: 'asc' } },
            priceAdjustments: { ...filterByPeriod, include: { period: true }, orderBy: { date: 'asc' } },
          },
        },
      },
    });

    const startingPeriodId = targetPeriods[0].id;
    const reportsByHousesData = houses.map(({ subscriberAccounts, ...house }) => getReportByHouse({ subscriberAccounts, house, startingPeriodId }));
    const reportsByHousesMarkup = getReportsByHousesMarkup({ reportsByHousesData, targetPeriods });
    const filePath = saveDataToPdf({ content: reportsByHousesMarkup, fileName: 'reports-houses.pdf', landscape: true });

    return filePath;
  }

  async getReportsBySubscribers({ periodId, streetId, houseId, minDebt }: IReportsBySubscribersFindFilters) {
    const period = await prisma.period.findUnique({ where: { id: periodId } });

    if (!period) {
      throw httpError({
        status: 404,
        message: ErrorMessages.periodNotFound,
      });
    }

    const subscriberAccounts = await prisma.subscriberAccount.findMany({
      where: { streetId, houseId },
      include: {
        owner: true,
        house: { include: { street: true } },
        payments: { where: { periodId }, orderBy: { date: 'asc' } },
        priceAdjustments: { where: { periodId }, include: { period: true }, orderBy: { date: 'asc' } },
        balances: { where: { periodId }, include: { period: true }, orderBy: { createdAt: 'asc' } },
        prices: { where: { periodId }, include: { tariff: true, period: true }, orderBy: { date: 'asc' } },
      },
    });

    const reportsBySubscribersData = subscriberAccounts.map((subscriberAccount) => getReportBySubscriber(subscriberAccount));
    const reportsBySubscribersMarkup = getReportsBySubscribersMarkup({ reportsBySubscribersData, period });
    // const filePath = saveDataToPdf({ content: reportsByHousesMarkup, fileName: 'reports-houses.pdf', landscape: true });

    return filePath;
  }
}

export default AccountingService;
