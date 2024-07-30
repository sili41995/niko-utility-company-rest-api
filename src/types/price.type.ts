import { IPeriod } from './period.type';

export interface IPrice {
  id: number;
  amount: number;
  date: Date;
  residents: number;
  tariff: number;
  subscriberAccountId: number;
  periodId: number;
  period: IPeriod;
}

export type NewPrice = Omit<IPrice, 'id' | 'period'>;

export type NewPrices = NewPrice[];

export type Prices = IPrice[];
