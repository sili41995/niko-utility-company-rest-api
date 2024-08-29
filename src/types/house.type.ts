import { House, Street } from '@prisma/client';

export type NewHouse = Pick<House, 'number' | 'streetId'>;

export type Houses = House[];

export interface IFullHouse extends House {
  street: Street;
}
