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

export interface IUpdatePriceByIdProps {
  id: number;
  data: { price: number };
}
