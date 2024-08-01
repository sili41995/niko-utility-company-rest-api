import { SectorTypes } from '../constants';

export interface ITariff {
  id: number;
  price: number;
  sector: `${SectorTypes.multiApartment}` | `${SectorTypes.private}` | `${SectorTypes.other}`;
  start: Date;
}

export type NewTariff = Omit<ITariff, 'id'>;

export type Tariffs = ITariff[];

export interface ICurrentTariffsId {
  multiApartmentSectorTariffId: number;
  privateSectorTariffId: number;
  otherSectorTariffId: number;
}
