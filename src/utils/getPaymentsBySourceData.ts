import { DateFormats } from '../constants';
import { IPaymentBySource, PaymentsBySource, PaymentsWithSubscriberAccount } from '../types/payment.type';
import formatDate from './formatDate';

const getPaymentsBySourceData = (payments: PaymentsWithSubscriberAccount): PaymentsBySource =>
  payments.map(({ date, subscriberAccount }): IPaymentBySource => {
    const { owner, apartment, house, number = '' } = subscriberAccount ?? {};
    const { name, middleName, surname } = owner ?? {};
    const { street, number: houseNumber } = house ?? {};
    const { name: streetName, type } = street ?? {};

    const fullName = `${surname} ${middleName} ${name}`;
    const houseAddress = `м. Нікополь, ${type} ${streetName} ${houseNumber}`;
    const address = apartment ? `${houseAddress}, кв. ${apartment}` : houseAddress;
    const paymentDate = formatDate({ date, dateFormat: DateFormats.date });

    return { number, address, date: paymentDate, fullName, service: 6 };
  });

export default getPaymentsBySourceData;
