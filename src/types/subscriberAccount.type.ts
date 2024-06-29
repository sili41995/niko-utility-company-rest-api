import { SectorTypes } from '../constants';
import { IFindFilters } from './types.type';

export interface ISubscriberAccount {
  id: number;
  subscriberAccount: string;
  contract: string;
  contractDate: Date;
  isLivingApartment: boolean;
  residents: number;
  period: Date;
  isRemovalHouseholdWaste: boolean;
  utr: string;
  passport: string;
  surname: string;
  name: string;
  middleName: string;
  isEligibleForBenefit: boolean;
  phone: string;
  additionalPhone: string;
  accountType: string;
  houseId: number;
  streetId: number;
  sector: `${SectorTypes.multiApartment}` | `${SectorTypes.private}` | `${SectorTypes.other}`;
  apartment: string | null;
  email: string | null;
  birthday: Date | null;
}

export type SubscriberAccounts = ISubscriberAccount[];

export type NewSubscriberAccount = Omit<ISubscriberAccount, 'id'>;

export interface IEditSubscriberAccountData
  extends Pick<ISubscriberAccount, 'additionalPhone' | 'isEligibleForBenefit' | 'isLivingApartment' | 'isRemovalHouseholdWaste' | 'period' | 'phone' | 'residents'> {
  comment: string;
  document: string;
  birthday?: Date;
  email?: string;
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
