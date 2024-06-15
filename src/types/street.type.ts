export interface IStreet {
  id: number;
  name: string;
  type: string;
}

export type NewStreet = Pick<IStreet, 'name' | 'type'>;

export type Streets = IStreet[];
