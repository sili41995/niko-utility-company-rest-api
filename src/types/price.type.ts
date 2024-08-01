import { IPeriod } from './period.type';
import { ITariff } from './tariff.type';

export interface IPrice {
  id: number;
  date: Date;
  residents: number;
  subscriberAccountId: number;
  tariffId: number;
  tariff: ITariff;
  periodId: number;
  period: IPeriod;
}

export type NewPrice = Omit<IPrice, 'id' | 'period' | 'tariff'>;

export type NewPrices = NewPrice[];

export type Prices = IPrice[];
