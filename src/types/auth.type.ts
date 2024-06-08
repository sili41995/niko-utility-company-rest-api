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

export type Credentials = Pick<IUser, 'password' | 'login'>;

export type SignInRes = Pick<IUser, 'token'>;
