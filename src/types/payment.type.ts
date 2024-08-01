import { PaymentSources } from '../constants';
import { IPeriod } from './period.type';
import { ISubscriberAccount } from './subscriberAccount.type';

export interface IPayment {
  id: number;
  amount: number;
  source:
    | `${PaymentSources.abank}`
    | `${PaymentSources.adjustment}`
    | `${PaymentSources.aval}`
    | `${PaymentSources.benefits}`
    | `${PaymentSources.cash}`
    | `${PaymentSources.oshchadbank}`
    | `${PaymentSources.postage}`
    | `${PaymentSources.privatbank}`
    | `${PaymentSources.ukrgasbank}`
    | `${PaymentSources.ukrsibbank}`;
  date: Date;
  subscriberAccountId: number;
  subscriberAccount?: ISubscriberAccount;
  periodId: number;
}

export type Payments = IPayment[];

export type NewPayment = Omit<IPayment, 'id' | 'subscriberAccount'>;

export type NewPayments = NewPayment[];

export interface IFindAllPaymentsRes {
  data: Payments;
  count: number;
}

export interface IPaymentBySource {
  number: string;
  fullName: string;
  address: string;
  service: number;
  date: string;
}

export type PaymentsBySource = IPaymentBySource[];
