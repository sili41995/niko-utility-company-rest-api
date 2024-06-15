export interface IHouse {
  id: number;
  number: string;
  street: number;
}

export type NewHouse = Pick<IHouse, 'number' | 'street'>;

export type Houses = IHouse[];
