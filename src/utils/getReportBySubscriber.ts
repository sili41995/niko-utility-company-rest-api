import { IReportBySubscriber } from '../types/report.type';
import { ISubscriberAccount } from '../types/subscriberAccount.type';
import { IAmount, IPriceProp } from '../types/types.type';
import { IPrice } from '../types/price.type';

const getReportBySubscriber = (subscriberAccount: ISubscriberAccount): IReportBySubscriber => {
  const { apartment, owner, number, balances, priceAdjustments, prices, payments, house } = subscriberAccount;
  const { number: houseNumber, street } = house;
  const { name: streetName, type } = street;
  const { surname, name, middleName, phone, additionalPhone } = owner ?? {};

  const address = `м. Нікополь, ${type} ${streetName}, буд. ${houseNumber}`;
  const apartmentNumber = apartment ? apartment : '-';
  const ownerName = `${surname} ${name} ${middleName}`;
  const phoneNumber = `${phone}, ${additionalPhone}`;

  const subscriberAccountPriceIncrementFunc = (acc: number, { residents, tariff: { price } }: IPrice) => acc + residents * price;
  const priceIncrementFunc = (acc: number, { price }: IPriceProp) => acc + price;
  const amountIncrementFunc = (acc: number, { amount }: IAmount) => acc + amount;

  const balance = balances[0].amount;
  const startingPriceAdjustments = priceAdjustments.reduce(priceIncrementFunc, 0);
  const startingPrices = prices.reduce(subscriberAccountPriceIncrementFunc, 0);
  const startingBalance = Number((balance + startingPrices + startingPriceAdjustments).toFixed(2));

  const subscriberAccountPrices = prices.reduce(subscriberAccountPriceIncrementFunc, 0);
  const subscriberAccountPriceAdjustments = priceAdjustments.reduce(priceIncrementFunc, 0);
  const totalPrices = subscriberAccountPrices + subscriberAccountPriceAdjustments;

  const totalPayments = payments.reduce(amountIncrementFunc, 0);
  const totalBalance = balance + totalPrices - totalPayments;

  const paymentsPercentage = ((totalBalance - startingBalance) / startingBalance) * 100;

  const startingBalanceFixedNumber = Number(startingBalance.toFixed(2));
  const totalPricesFixedNumber = Number(totalPrices.toFixed(2));
  const paymentsFixedNumber = Number(totalPayments.toFixed(2));
  const totalBalanceFixedNumber = Number(totalBalance.toFixed(2));
  const paymentsPercentageFixedNumber = Number(paymentsPercentage.toFixed(2));

  return {
    address,
    apartmentNumber,
    ownerName,
    number,
    phoneNumber,
    startingBalance: startingBalanceFixedNumber,
    prices: totalPricesFixedNumber,
    payments: paymentsFixedNumber,
    benefits: 0,
    subsidy: 0,
    totalBalance: totalBalanceFixedNumber,
    paymentsPercentage: paymentsPercentageFixedNumber,
  };
};

export default getReportBySubscriber;
