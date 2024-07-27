export interface IPrice {
  id: number;
  amount: number;
  date: Date;
  subscriberAccountId: number;
  periodId: number;
}

export type NewPrice = Omit<IPrice, 'id'>;

export type NewPrices = NewPrice[];
