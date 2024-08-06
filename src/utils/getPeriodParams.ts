import { addMonths } from 'date-fns';
import { IPeriodParams, ITimePeriod } from '../types/types.type';

const getPeriodParams = ({ from, to }: ITimePeriod): IPeriodParams => {
  const fromDate = new Date(from);
  const toDate = new Date(to);
  const periodStart = fromDate;
  const periodEnd = addMonths(toDate, 1);

  return { periodStart, periodEnd };
};

export default getPeriodParams;
