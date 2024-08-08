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
