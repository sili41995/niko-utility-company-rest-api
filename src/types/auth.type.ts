import { Request } from 'express';
import { IUser, UserData } from './user.type';

export type Credentials = Pick<IUser, 'password' | 'login'>;

export type SignInRes = Pick<IUser, 'token'>;

export interface IDecodedToken {
  id: number;
}

export interface IAuthRequest extends Request {
  body: IUser;
  user?: UserData;
}
