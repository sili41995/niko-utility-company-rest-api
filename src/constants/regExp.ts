import { IRegExp } from '../types/types.type';

const regExp: IRegExp = {
  email: /^[-?\w.?!#$&'-~%?]+@\w+\.{1}\w{2,4}$/,
  login: /^\S+$/,
  phone: /^\+?[\d -]+$/,
  currentAccount: /^UA\d{27}$/,
  mfi: /^\d{6}$/,
  notEmptyValue: /\S/,
};

export default regExp;
