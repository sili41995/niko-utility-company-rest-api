import { SectorTypes } from '../constants';
import { IFindFilters } from './types.type';

export interface IOwner {
  id: number;
  utr: string;
  passport: string;
  surname: string;
  name: string;
  middleName: string;
  phone: string;
  additionalPhone: string;
  email: string | null;
  birthday: Date | null;
  subscriberAccountId: number;
}

export type UpdatedOwnerData = Pick<IOwner, 'phone' | 'additionalPhone' | 'email' | 'birthday'>;

export interface ISubscriberAccount {
  id: number;
  subscriberAccount: string;
  contract: string;
  contractDate: Date;
  isLivingApartment: boolean;
  residents: number;
  period: Date;
  isRemovalHouseholdWaste: boolean;
  isEligibleForBenefit: boolean;
  accountType: string;
  balance: number;
  houseId: number;
  streetId: number;
  sector: `${SectorTypes.multiApartment}` | `${SectorTypes.private}` | `${SectorTypes.other}`;
  apartment: string | null;
}

export type SubscriberAccounts = ISubscriberAccount[];

export interface INewSubscriberAccount extends Omit<ISubscriberAccount, 'id'> {
  owner: IOwner;
}

export interface IEditSubscriberAccountData extends Pick<ISubscriberAccount, 'isEligibleForBenefit' | 'isLivingApartment' | 'isRemovalHouseholdWaste' | 'period' | 'residents'> {
  comment: string;
  document: string;
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
  account: string | undefined;
  type: string | undefined;
  street: string | undefined;
  house: string | undefined;
  apartment: string | undefined;
}

export interface IPricesInfo {
  lastCalculate: Date;
}
