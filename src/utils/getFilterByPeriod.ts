import { IFilterByPeriod, ITimePeriod } from '../types/types.type';
import getPeriodParams from './getPeriodParams';

const getFilterByPeriod = (timePeriod: ITimePeriod): IFilterByPeriod => {
  const { periodEnd, periodStart } = getPeriodParams(timePeriod);

  const filterByPeriodDate = { start: { gte: periodStart, lt: periodEnd } };
  const filterByPeriod = { where: { period: filterByPeriodDate } };

  return { filterByPeriodDate, filterByPeriod };
};

export default getFilterByPeriod;
