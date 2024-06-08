import { IRegExp } from '../types/types.type';

const regExp: IRegExp = {
  email: /^[-?\w.?!#$&'-~%?]+@\w+\.{1}\w{2,4}$/,
  login: /^\S+$/,
  notEmptyValue: /\S/,
};

export default regExp;
