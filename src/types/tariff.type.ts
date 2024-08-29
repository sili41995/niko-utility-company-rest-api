import { Tariff } from '@prisma/client';

export type NewTariff = Omit<Tariff, 'id'>;

export type Tariffs = Tariff[];

export interface ICurrentTariffsId {
  multiApartmentSectorTariffId: number;
  privateSectorTariffId: number;
  otherSectorTariffId: number;
}
