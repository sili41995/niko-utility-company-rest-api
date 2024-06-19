export interface ISubscriberAccount {
  id: Number;
  apartment: Number;
  subscriberAccount: String;
  contract: String;
  contractDate: Date;
  isLivingApartment: Boolean;
  residents: Number;
  period: Date;
  isRemovalHouseholdWaste: Boolean;
  utr: String;
  passport: String;
  surname: String;
  name: String;
  middleName: String;
  phone: String;
  additionalPhone: String;
  accountType: String;
  house: Number;
  email: String | null;
  birthday: String | null;
}

export type SubscriberAccounts = ISubscriberAccount[];
