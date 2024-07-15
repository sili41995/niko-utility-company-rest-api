import { SubscriberAccounts } from './subscriberAccount.type';

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
}
