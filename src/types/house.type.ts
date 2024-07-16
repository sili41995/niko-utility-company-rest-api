import { IStreet } from './street.type';

export interface IHouse {
  id: number;
  number: string;
  streetId: number;
  street: IStreet;
}

export type NewHouse = Pick<IHouse, 'number' | 'streetId'>;

export type Houses = IHouse[];
