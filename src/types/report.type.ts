import { ITimePeriod } from './types.type';

export interface IReportsBySubscribersFindFilters {
  periodId: number;
  streetId: number | undefined;
  houseId: number | undefined;
  minDebt: number;
}

export interface IReportsFindFilters extends ITimePeriod, IReportsBySubscribersFindFilters {}

export interface IReport {
  startingBalance: number;
  prices: number;
  payments: number;
  benefits: number;
  subsidy: number;
  totalBalance: number;
  paymentsPercentage: number;
}

export interface IReportByStreet extends IReport {
  streetName: string;
}

export type ReportsByStreets = IReportByStreet[];

export interface IReportByHouse extends IReport {
  address: string;
}

export type ReportsByHouses = IReportByHouse[];

export interface IReportBySubscriber extends IReport {
  address: string;
  apartmentNumber: string;
  ownerName: string;
  number: string;
  phoneNumber: string;
}
