export interface ISubscriberAccount {
  id: number;
  apartment: number;
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
  phone: string;
  additionalPhone: string;
  accountType: string;
  house: number;
  email: string | null;
  birthday: string | null;
  comment: string | null;
}

export type SubscriberAccounts = ISubscriberAccount[];

export type NewSubscriberAccount = Omit<ISubscriberAccount, 'id'>;

export interface IFindAllSubscriberAccountsRes {
  data: SubscriberAccounts;
  count: number;
}
