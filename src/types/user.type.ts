import { User } from '@prisma/client';

export type NewUser = Pick<User, 'login' | 'name' | 'password' | 'email'>;

export type UserData = Pick<User, 'id' | 'name' | 'login' | 'email'>;

export type Users = UserData[];

export interface IUpdateUserByIdProps {
  id: number;
  data: UserData;
}
