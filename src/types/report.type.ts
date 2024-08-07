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
