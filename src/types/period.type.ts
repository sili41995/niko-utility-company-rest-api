export interface IPeriod {
  id: number;
  isCurrentPeriod: boolean;
  start: Date;
}

export interface IPeriodId {
  periodId: number;
}

export type Periods = IPeriod[];
