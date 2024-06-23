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
  surname: string | undefined;
  name: string | undefined;
  account: string | undefined;
  type: string | undefined;
  street: string | undefined;
  house: string | undefined;
  apartment: string | undefined;
}
