import { ISubscriberAccount } from './subscriberAccount.type';

export interface IPeriod {
  id: number;
  isCurrentPeriod: boolean;
  start: Date;
}

export type Periods = IPeriod[];

export interface IGetYearParams {
  yearStart: string;
  yearEnd: string;
}

export interface IPriceAdjustment {
  id: number;
  price: number;
  date: Date;
  comment: string;
  subscriberAccountId: number;
  subscriberAccount?: ISubscriberAccount;
}

export type AddPriceAdjustmentData = Omit<IPriceAdjustment, 'id' | 'subscriberAccount'>;
