import { DateFormats } from '../constants';
import { Periods } from '../types/period.type';
import { ITargetPeriodsParams } from '../types/types.type';
import formatDate from './formatDate';

const getTargetPeriodsParams = (targetPeriods: Periods): ITargetPeriodsParams => {
  const firstPeriodDate = targetPeriods[0].start;
  const periodStart = formatDate({ date: firstPeriodDate, dateFormat: DateFormats.period });

  const lastTargetPeriodIndex = targetPeriods.length - 1;
  const lastTargetPeriodDate = targetPeriods[lastTargetPeriodIndex].start;
  const periodEnd = formatDate({ date: lastTargetPeriodDate, dateFormat: DateFormats.period });

  return { periodStart, periodEnd };
};

export default getTargetPeriodsParams;
