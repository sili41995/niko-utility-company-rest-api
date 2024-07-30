import { IPeriod } from './period.type';

export interface IBalance {
  id: number;
  amount: number;
  createdAt: Date;
  periodId: number;
  period: IPeriod;
  subscriberAccountId: number;
}

export type NewBalance = Omit<IBalance, 'id' | 'createdAt' | 'period'>;

export type NewBalances = NewBalance[];

export type Balances = IBalance[];
