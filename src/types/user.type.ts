export interface IUser {
  id: number;
  name: string;
  login: string;
  email: string;
  password: string;
  token: string | null;
}

export type NewUser = Pick<IUser, 'login' | 'name' | 'password' | 'email'>;

export type UserData = Pick<IUser, 'id' | 'name' | 'login' | 'email'>;

export type Users = UserData[];

export interface IUpdateUserByIdProps {
  id: number;
  data: UserData;
}
