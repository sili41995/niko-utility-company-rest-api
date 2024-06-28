import { SectorTypes } from '../constants';

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
  sector: `${SectorTypes.multiFamily}` | `${SectorTypes.private}` | `${SectorTypes.other}`;
  apartment: string | null;
  email: string | null;
  birthday: Date | null;
  comment: string | null;
}

export type SubscriberAccounts = ISubscriberAccount[];

export type NewSubscriberAccount = Omit<ISubscriberAccount, 'id'>;

export interface IEditSubscriberAccountData
  extends Pick<ISubscriberAccount, 'additionalPhone' | 'isEligibleForBenefit' | 'isLivingApartment' | 'isRemovalHouseholdWaste' | 'period' | 'phone' | 'residents'> {
  comment?: string;
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
