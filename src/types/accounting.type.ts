import { ITimePeriod } from './types.type';

export interface IReportsBySubscribersFindFilters {
  periodId: number;
  streetId: number | undefined;
  houseId: number | undefined;
  minDebt: number;
}

export interface IReportsFindFilters extends ITimePeriod, IReportsBySubscribersFindFilters {}
