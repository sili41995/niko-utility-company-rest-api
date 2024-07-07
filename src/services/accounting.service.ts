import { prisma } from '../app';
import { ErrorMessages } from '../constants';
import { IPeriod, Periods } from '../types/accounting.type';
import { getYearParams, httpError } from '../utils';

class AccountingService {
  async getAllPeriods(): Promise<Periods> {
    const { yearStart, yearEnd } = getYearParams();
    const result = await prisma.period.findMany({ where: { start: { gte: yearStart, lte: yearEnd } } });

    return result;
  }

  async getCurrentPeriod(): Promise<IPeriod> {
    const result = await prisma.period.findFirst({ where: { isCurrentPeriod: true }, orderBy: { start: 'desc' } });

    if (!result) {
      throw httpError({
        status: 409,
        message: ErrorMessages.periodNotFound,
      });
    }

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
    const result = await prisma.period.create({ data: { isCurrentPeriod: true } });

    return result;
  }
}

export default AccountingService;
