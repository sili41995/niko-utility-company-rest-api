import { IPeriodId } from '../types/period.type';
import { NewBalances } from '../types/balance.types';
import { IGetNewPeriodSubscriberAccountBalancesDataProps } from '../types/types.type';

const getNewPeriodSubscriberAccountBalancesData = ({ subscriberAccounts, currentPeriodId, prevPeriodId }: IGetNewPeriodSubscriberAccountBalancesDataProps): NewBalances => {
  return subscriberAccounts.map(({ balances, payments, prices, priceAdjustments, id }) => {
    const filterFunc = ({ periodId }: IPeriodId) => periodId === prevPeriodId;
    const startingBalances = balances.filter(filterFunc);
    const startingBalance = startingBalances[0].amount;

    const currentPayments = payments.filter(filterFunc).reduce((acc, { amount }) => acc + amount, 0);
    const currentPrices = prices.filter(filterFunc).reduce((acc, { amount }) => acc + amount, 0);
    const currentPriceAdjustments = priceAdjustments.filter(filterFunc).reduce((acc, { price }) => acc + price, 0);

    const balance = startingBalance + currentPrices + currentPriceAdjustments - currentPayments;

    return {
      amount: Number(balance.toFixed(2)),
      periodId: currentPeriodId,
      subscriberAccountId: id,
    };
  });
};

export default getNewPeriodSubscriberAccountBalancesData;
