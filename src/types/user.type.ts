export interface IUser {
  id: number;
  name: string;
  login: string;
  email: string;
  password: string;
  token: string | null;
  fullAccess: boolean;
  houses: boolean;
  subscribers: boolean;
  accounting: boolean;
  documents: boolean;
  counters: boolean;
  oneOffJobs: boolean;
  settings: boolean;
}

export type NewUser = Pick<IUser, 'login' | 'name' | 'password' | 'email'>;

export type UserData = Pick<IUser, 'id' | 'name' | 'login' | 'email' | 'fullAccess' | 'houses' | 'subscribers' | 'accounting' | 'documents' | 'counters' | 'oneOffJobs' | 'settings'>;

export type Users = UserData[];

export interface IUpdateUserByIdProps {
  id: number;
  data: UserData;
}
