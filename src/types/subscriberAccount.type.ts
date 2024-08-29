import { House, Owner, Street, SubscriberAccount } from '@prisma/client';
import { IFindFilters } from './types.type';
import { IFullHouse } from './house.type';
import { Payments } from './payment.type';
import { PricesWithTariff } from './price.type';
import { PriceAdjustments } from './priceAdjustment.type';
import { Balances } from './balance.types';

export type UpdatedOwnerData = Pick<Owner, 'phone' | 'additionalPhone' | 'email' | 'birthday'>;

export type SubscriberAccounts = SubscriberAccount[];

export interface INewSubscriberAccount extends Omit<SubscriberAccount, 'id' | 'house' | 'prices' | 'balances' | 'priceAdjustments' | 'payments'> {
  owner: Owner;
}

export interface IEditSubscriberAccountData extends Pick<SubscriberAccount, 'isEligibleForBenefit' | 'isLivingApartment' | 'isRemovalHouseholdWaste' | 'period' | 'residents'> {
  comment: string;
  name: string;
  owner?: UpdatedOwnerData;
}

export interface IFindAllSubscriberAccountsRes {
  data: SubscriberAccounts;
  count: number;
  filteredCount: number;
}

export interface IUpdateSubscriberAccountByIdProps {
  id: number;
  data: IEditSubscriberAccountData;
}

export interface ISubscriberAccountsFindFilters extends IFindFilters {
  surname: string | undefined;
  name: string | undefined;
  number: string | undefined;
  type: string | undefined;
  street: string | undefined;
  house: string | undefined;
  apartment: string | undefined;
}

export interface IPricesInfo {
  lastCalculate: Date;
}

export interface IFullSubscriberAccount extends SubscriberAccount {
  house: IFullHouse;
  owner: Owner | null;
  payments: Payments;
  prices: PricesWithTariff;
  priceAdjustments: PriceAdjustments;
  balances: Balances;
}

export type FullSubscriberAccounts = IFullSubscriberAccount[];
