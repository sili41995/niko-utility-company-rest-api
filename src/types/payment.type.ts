import { Payment, SubscriberAccount } from '@prisma/client';
import { IFullSubscriberAccount } from './subscriberAccount.type';

export type Payments = Payment[];

export type NewPayment = Omit<Payment, 'id' | 'subscriberAccount'>;

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

export interface IPaymentWithSubscriberAccount extends Payment {
  subscriberAccount: IFullSubscriberAccount;
}

export type PaymentsWithSubscriberAccount = IPaymentWithSubscriberAccount[];
