import { IPeriodId } from '../types/period.type';
import { IAmount, IGetBalanceByPeriodProps } from '../types/types.type';

const getBalanceByPeriod = ({ targetPeriodId, subscriberAccount }: IGetBalanceByPeriodProps): number => {
  const { payments, prices, priceAdjustments, balances } = subscriberAccount;

  const filterFunc = ({ periodId }: IPeriodId) => targetPeriodId === periodId;
  const amountIncrementFunc = (acc: number, { amount }: IAmount) => amount + acc;

  const totalPayments = payments.filter(filterFunc).reduce(amountIncrementFunc, 0);
  const totalPrices = prices.filter(filterFunc).reduce((acc, { residents, tariff: { price } }) => residents * price + acc, 0);
  const totalPriceAdjustments = priceAdjustments.filter(filterFunc).reduce((acc, { price }) => price + acc, 0);
  const totalBalances = balances.filter(filterFunc).reduce(amountIncrementFunc, 0);

  const totalBalance = totalBalances + totalPrices + totalPriceAdjustments - totalPayments;
  const balance = Number(totalBalance.toFixed(2));

  return balance;
};

export default getBalanceByPeriod;
