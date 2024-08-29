import { Price, Tariff } from '@prisma/client';

export type NewPrice = Omit<Price, 'id' | 'period' | 'tariff'>;

export type NewPrices = NewPrice[];

export type Prices = Price[];

export interface IPriceWithTariff extends Price {
  tariff: Tariff;
}

export type PricesWithTariff = IPriceWithTariff[];
