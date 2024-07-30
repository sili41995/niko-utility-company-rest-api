import { IPeriod } from './period.type';
import { ISubscriberAccount } from './subscriberAccount.type';

export interface IPriceAdjustment {
  id: number;
  price: number;
  date: Date;
  comment: string;
  subscriberAccountId: number;
  subscriberAccount?: ISubscriberAccount;
  periodId: number;
  period: IPeriod;
}

export type NewPriceAdjustment = Omit<IPriceAdjustment, 'id' | 'subscriberAccount' | 'period'>;

export type PriceAdjustments = IPriceAdjustment[];
