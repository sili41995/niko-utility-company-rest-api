import { IPeriodId } from '../types/period.type';
import { IPrice } from '../types/price.type';
import { IAmount, IGetReportByStreetProps, IPriceProp } from '../types/types.type';
import { IReportByStreet } from '../types/report.type';

const getReportByStreet = ({ street, subscriberAccounts, startingPeriodId }: IGetReportByStreetProps): IReportByStreet => {
  const { name, type } = street;

  const streetName = `м. Нікополь, ${type} ${name}`;

  const subscriberAccountPriceIncrementFunc = (acc: number, { residents, tariff: { price } }: IPrice) => acc + residents * price;
  const priceIncrementFunc = (acc: number, { price }: IPriceProp) => acc + price;
  const amountIncrementFunc = (acc: number, { amount }: IAmount) => acc + amount;
  const filterByPeriodIdFunc = ({ periodId }: IPeriodId) => periodId === startingPeriodId;

  const balance = subscriberAccounts.map(({ balances }) => balances.find(filterByPeriodIdFunc)).reduce((acc: number, item) => (item ? item.amount : 0) + acc, 0);
  const startingPriceAdjustments = subscriberAccounts.flatMap(({ priceAdjustments }) => priceAdjustments.filter(filterByPeriodIdFunc)).reduce(priceIncrementFunc, 0);
  const startingPrices = subscriberAccounts.flatMap(({ prices }) => prices.filter(filterByPeriodIdFunc)).reduce(subscriberAccountPriceIncrementFunc, 0);
  const startingBalance = Number((balance + startingPrices + startingPriceAdjustments).toFixed(2));

  const prices = subscriberAccounts.flatMap(({ prices }) => prices).reduce(subscriberAccountPriceIncrementFunc, 0);
  const priceAdjustments = subscriberAccounts.flatMap(({ priceAdjustments }) => priceAdjustments).reduce(priceIncrementFunc, 0);
  const totalPrices = prices + priceAdjustments;

  const payments = subscriberAccounts.flatMap(({ payments }) => payments).reduce(amountIncrementFunc, 0);
  const totalBalance = balance + totalPrices - payments;

  const paymentsPercentage = ((totalBalance - startingBalance) / startingBalance) * 100;

  const startingBalanceFixedNumber = Number(startingBalance.toFixed(2));
  const totalPricesFixedNumber = Number(totalPrices.toFixed(2));
  const paymentsFixedNumber = Number(payments.toFixed(2));
  const totalBalanceFixedNumber = Number(totalBalance.toFixed(2));
  const paymentsPercentageFixedNumber = Number(paymentsPercentage.toFixed(2));

  return {
    streetName,
    startingBalance: startingBalanceFixedNumber,
    prices: totalPricesFixedNumber,
    payments: paymentsFixedNumber,
    benefits: 0,
    subsidy: 0,
    totalBalance: totalBalanceFixedNumber,
    paymentsPercentage: paymentsPercentageFixedNumber,
  };
};

export default getReportByStreet;
