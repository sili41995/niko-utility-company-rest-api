import { IPeriod, PaymentsBySource } from './accounting.type';
import { IGeneralSettings } from './generalSettings.type';
import { ISubscriberAccount, SubscriberAccounts } from './subscriberAccount.type';

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
