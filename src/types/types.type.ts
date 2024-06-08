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
}
