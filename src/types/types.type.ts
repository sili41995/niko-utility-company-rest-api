import { Periods } from './period.type';
import { FullSubscriberAccounts, IFullSubscriberAccount, SubscriberAccounts } from './subscriberAccount.type';
import { ICurrentTariffsId } from './tariff.type';
import { PaymentsBySource } from './payment.type';
import { HtmlDocumentStyles } from '../constants';
import { ReportsByHouses, ReportsByStreets, ReportsBySubscribers } from './report.type';
import { GeneralSettings, House, Period, Street } from '@prisma/client';
import { IFullHouse } from './house.type';

export interface IHttpError {
  status: number;
  message?: string;
}

export interface IErrorMessageList {
  [key: number]: string;
}

export interface IRegExp {
  login: RegExp;
  email: RegExp;
  notEmptyValue: RegExp;
  phone: RegExp;
  currentAccount: RegExp;
}

export interface IFindFilters {
  skip: number;
  take: number;
}

export interface IGetInvoicesProps {
  subscriberAccounts: FullSubscriberAccounts;
  generalSettings: GeneralSettings;
  period: Period;
}

export interface IFormatDateProps {
  date: Date;
  dateFormat: string;
}

export interface ICreateInvoiceProps extends Omit<IGetInvoicesProps, 'subscriberAccounts'> {
  subscriberAccount: IFullSubscriberAccount;
}

export interface ISavePaymentsToCsvProps {
  filePath: string;
  payments: PaymentsBySource;
}

export interface ITimePeriod {
  from: string;
  to: string;
}

export interface INewPricesDataProps {
  subscriberAccounts: SubscriberAccounts;
  currentTariffsId: ICurrentTariffsId;
  currentPeriod: Period;
}

export interface IGetNewPeriodSubscriberAccountBalancesDataProps {
  subscriberAccounts: FullSubscriberAccounts;
  prevPeriodId: number;
  currentPeriodId: number;
}

export interface IGetYearParams {
  yearStart: string;
  yearEnd: string;
}

export interface IAmount {
  amount: number;
}

export interface IPriceProp {
  price: number;
}

export interface IGetReportByStreetProps {
  street: Street;
  subscriberAccounts: FullSubscriberAccounts;
  startingPeriodId: number;
}

export interface IPeriodParams {
  periodStart: Date;
  periodEnd: Date;
}

export interface ICreateHtmlMarkupProps {
  content: string;
  styles: HtmlDocumentStyles;
}

export interface ITargetPeriodsParams {
  periodStart: string;
  periodEnd: string;
}

export interface ISaveDataToPdfProps {
  content: string;
  fileName: string;
  landscape?: boolean;
}

export interface IGetReportsByStreetsMarkupProps {
  reportsByStreetsData: ReportsByStreets;
  targetPeriods: Periods;
}

export interface ICreateReportsByStreetsHtmlDocumentDataProps {
  periodStart: string;
  periodEnd: string;
  tableData: ReportsByStreets;
}

export interface IPeriodStartInterval {
  start: { gte: Date; lt: Date };
}

export interface IFilterByPeriod {
  filterByPeriodDate: IPeriodStartInterval;
  filterByPeriod: { where: { period: IPeriodStartInterval } };
}

export interface IGetReportByHouseProps {
  house: IFullHouse;
  subscriberAccounts: FullSubscriberAccounts;
  startingPeriodId: number;
}

export interface IGetReportsByHousesMarkupProps {
  reportsByHousesData: ReportsByHouses;
  targetPeriods: Periods;
}

export interface ICreateReportsByHousesHtmlDocumentDataProps {
  periodStart: string;
  periodEnd: string;
  tableData: ReportsByHouses;
}

export interface IGetReportsBySubscribersMarkupProps {
  reportsBySubscribersData: ReportsBySubscribers;
  period: Period;
  minDebt: number;
}

export interface ICreateReportsBySubscribersHtmlDocumentDataProps {
  tableData: ReportsBySubscribers;
  periodDate: string;
  minDebt: number;
}

export interface IFilterReportsBySubscriberProps {
  reportsBySubscribersData: ReportsBySubscribers;
  minDebt: number;
}

export interface IInvoicesFindFilters {
  streetId: number | undefined;
  houseId: number | undefined;
}

export interface IGetBalanceByPeriodProps {
  targetPeriodId: number;
  subscriberAccount: IFullSubscriberAccount;
}
