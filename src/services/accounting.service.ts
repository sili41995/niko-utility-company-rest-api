import { prisma } from '../app';
import { ErrorMessages } from '../constants';
import { IPeriod, IUpdatePriceByIdProps, Periods } from '../types/accounting.type';
import { ISubscriberAccount } from '../types/subscriberAccount.type';
import { getYearParams, httpError } from '../utils';

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

  async updatePriceById({ id, data }: IUpdatePriceByIdProps): Promise<ISubscriberAccount> {
    const result = await prisma.subscriberAccount.update({
      where: { id },
      data,
    });

    return result;
  }
}

export default AccountingService;
