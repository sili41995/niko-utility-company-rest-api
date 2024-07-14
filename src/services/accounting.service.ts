import { Prisma } from '@prisma/client';
import { prisma } from '../app';
import { ErrorMessages, SectorTypes } from '../constants';
import { NewPriceAdjustment, IPeriod, IPriceAdjustment, Periods, IPayment, NewPayment, IFindAllPaymentsRes } from '../types/accounting.type';
import { IPricesInfo } from '../types/subscriberAccount.type';
import { getYearParams, httpError } from '../utils';
import { IFindFilters } from '../types/types.type';

class AccountingService {
  async getAllPeriods(): Promise<Periods> {
    const { yearStart, yearEnd } = getYearParams();
    const result = await prisma.period.findMany({ where: { start: { gte: yearStart, lte: yearEnd } }, include: { statistics: true }, orderBy: { start: 'desc' } });

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

    if (!subscriberAccounts) {
      throw httpError({
        status: 404,
        message: ErrorMessages.subscriberAccountNotFound,
      });
    }

    const subscriberAccountsTotalCount = await prisma.subscriberAccount.count();
    const residents = subscriberAccounts.reduce((acc, { residents }) => acc + residents, 0);
    await prisma.statistics.create({ data: { periodId: id, residents, subscriberAccounts: subscriberAccountsTotalCount, adjustment: 0, balanceEnd: 0, balanceStart: 0 } });

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
    const result = await prisma.subscriberAccount.findFirst({ where: { lastCalculate: { not: null } } });

    if (!result || !result.lastCalculate) {
      throw httpError({
        status: 404,
        message: ErrorMessages.priceNotFound,
      });
    }

    return {
      lastCalculate: result.lastCalculate,
    };
  }

  async calculatePrices(): Promise<IPricesInfo> {
    const currentDate = new Date();
    const tariffOrderBy: Prisma.TariffOrderByWithRelationInput = { start: 'desc' };
    const tariffDateFilter = { lte: currentDate };

    const multiApartmentSector = await prisma.tariff.findFirst({ where: { sector: SectorTypes.multiApartment, start: tariffDateFilter }, orderBy: tariffOrderBy });

    const privateSector = await prisma.tariff.findFirst({ where: { sector: SectorTypes.private, start: tariffDateFilter }, orderBy: tariffOrderBy });

    const otherSector = await prisma.tariff.findFirst({ where: { sector: SectorTypes.other, start: tariffDateFilter }, orderBy: tariffOrderBy });

    if (!multiApartmentSector) {
      throw httpError({
        status: 404,
        message: ErrorMessages.multiApartmentTariffNotFound,
      });
    }

    if (!privateSector) {
      throw httpError({
        status: 404,
        message: ErrorMessages.privateTariffNotFound,
      });
    }

    if (!otherSector) {
      throw httpError({
        status: 404,
        message: ErrorMessages.otherTariffNotFound,
      });
    }

    const { tariff: multiApartmentSectorTariff } = multiApartmentSector;
    const { tariff: privateSectorTariff } = privateSector;
    const { tariff: otherSectorTariff } = otherSector;

    await prisma.$executeRaw`UPDATE "SubscriberAccount" SET "price" = "residents" * ${multiApartmentSectorTariff}, "lastCalculate" = ${currentDate}::timestamp WHERE "sector" = ${SectorTypes.multiApartment}::"SectorType"`;
    await prisma.$executeRaw`UPDATE "SubscriberAccount" SET "price" = "residents" * ${privateSectorTariff}, "lastCalculate" = ${currentDate}::timestamp WHERE "sector" = ${SectorTypes.private}::"SectorType"`;
    await prisma.$executeRaw`UPDATE "SubscriberAccount" SET "price" = "residents" * ${otherSectorTariff}, "lastCalculate" = ${currentDate}::timestamp WHERE "sector" = ${SectorTypes.other}::"SectorType"`;

    const result = await prisma.subscriberAccount.findFirst({ where: { lastCalculate: { not: null } } });

    if (!result || !result.lastCalculate) {
      throw httpError({
        status: 404,
        message: ErrorMessages.priceNotFound,
      });
    }

    return {
      lastCalculate: result.lastCalculate,
    };
  }

  async addPriceAdjustment(data: NewPriceAdjustment): Promise<IPriceAdjustment> {
    const result = await prisma.priceAdjustment.create({ data });

    await prisma.subscriberAccount.update({ where: { id: data.subscriberAccountId }, data: { price: data.price } });

    return result;
  }

  async getAllPayments({ skip, take }: IFindFilters): Promise<IFindAllPaymentsRes> {
    const result = await prisma.payment.findMany({
      orderBy: { date: 'desc' },
      include: { subscriberAccount: true, period: true },
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
}

export default AccountingService;
