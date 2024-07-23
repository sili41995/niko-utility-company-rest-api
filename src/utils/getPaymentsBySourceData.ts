import { DateFormats } from '../constants';
import { IPaymentBySource, Payments, PaymentsBySource } from '../types/accounting.type';
import formatDate from './formatDate';

const getPaymentsBySourceData = (payments: Payments): PaymentsBySource =>
  payments.map(({ date, subscriberAccount }): IPaymentBySource => {
    const { owner, apartment, house, balance = 0, subscriberAccount: subscriberAccountNumber = '' } = subscriberAccount ?? {};
    const { name, middleName, surname } = owner ?? {};
    const { street, number } = house ?? {};
    const { name: streetName, type } = street ?? {};

    const fullName = `${surname} ${middleName} ${name}`;
    const houseAddress = `м. Нікополь, ${type} ${streetName} ${number}`;
    const address = apartment ? `${houseAddress}, кв. ${apartment}` : houseAddress;
    const paymentDate = formatDate({ date, dateFormat: DateFormats.date });

    return { subscriberAccount: subscriberAccountNumber, address, balance, date: paymentDate, fullName, service: 6 };
  });

export default getPaymentsBySourceData;
