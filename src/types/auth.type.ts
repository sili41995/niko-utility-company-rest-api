import { Request } from 'express';
import { UserData } from './user.type';
import { User } from '@prisma/client';

export type Credentials = Pick<User, 'password' | 'login'>;

export type SignInRes = Pick<User, 'token'>;

export interface IDecodedToken {
  id: number;
}

export interface IAuthRequest extends Request {
  body: User;
  user?: UserData;
}
