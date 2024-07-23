import { PaymentSources } from '../constants';
import { ISubscriberAccount } from './subscriberAccount.type';

export interface IPeriod {
  id: number;
  isCurrentPeriod: boolean;
  start: Date;
}

export type Periods = IPeriod[];

export interface IGetYearParams {
  yearStart: string;
  yearEnd: string;
}

export interface IPriceAdjustment {
  id: number;
  price: number;
  date: Date;
  comment: string;
  subscriberAccountId: number;
  subscriberAccount?: ISubscriberAccount;
}

export type NewPriceAdjustment = Omit<IPriceAdjustment, 'id' | 'subscriberAccount'>;

export interface IPayment {
  id: number;
  amount: number;
  source:
    | `${PaymentSources.abank}`
    | `${PaymentSources.adjustment}`
    | `${PaymentSources.aval}`
    | `${PaymentSources.benefitCompensation}`
    | `${PaymentSources.cash}`
    | `${PaymentSources.oshchadbank}`
    | `${PaymentSources.postage}`
    | `${PaymentSources.privatbank}`
    | `${PaymentSources.ukrgasbank}`
    | `${PaymentSources.ukrsibbank}`;
  date: Date;
  subscriberAccountId: number;
  subscriberAccount?: ISubscriberAccount;
}

export type Payments = IPayment[];

export type NewPayment = Omit<IPayment, 'id' | 'subscriberAccount'>;

export interface IFindAllPaymentsRes {
  data: Payments;
  count: number;
}

export interface IPaymentBySource {
  subscriberAccount: string;
  fullName: string;
  address: string;
  service: number;
  balance: number;
  date: string;
}

export type PaymentsBySource = IPaymentBySource[];
