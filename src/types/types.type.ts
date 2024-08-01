import { IPeriod } from './period.type';
import { IGeneralSettings } from './generalSettings.type';
import { ISubscriberAccount, SubscriberAccounts } from './subscriberAccount.type';
import { ICurrentTariffsId } from './tariff.type';
import { PaymentsBySource } from './payment.type';

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
  mfi: RegExp;
}

export interface IFindFilters {
  skip: number;
  take: number;
}

export interface IGetInvoicesProps {
  subscriberAccounts: SubscriberAccounts;
  generalSettings: IGeneralSettings;
  period: IPeriod;
}

export interface IFormatDateProps {
  date: Date;
  dateFormat: string;
}

export interface ICreateInvoiceProps extends Omit<IGetInvoicesProps, 'subscriberAccounts'> {
  subscriberAccount: ISubscriberAccount;
}

export interface ISavePaymentsToCsvProps {
  filePath: string;
  payments: PaymentsBySource;
}

export interface ITimePeriod {
  from: Date;
  to: Date;
}

export interface INewPricesDataProps {
  subscriberAccounts: SubscriberAccounts;
  currentTariffsId: ICurrentTariffsId;
  currentPeriod: IPeriod;
}

export interface IGetNewPeriodSubscriberAccountBalancesDataProps {
  subscriberAccounts: SubscriberAccounts;
  prevPeriodId: number;
  currentPeriodId: number;
}

export interface IGetYearParams {
  yearStart: string;
  yearEnd: string;
}
