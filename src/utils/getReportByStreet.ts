import { IStreet } from '../types/street.type';
import { SubscriberAccounts } from '../types/subscriberAccount.type';
import { IAmount, IGetReportByStreet } from '../types/types.type';

const getReportByStreet = ({ street, subscriberAccounts, startingPeriodId }: { street: IStreet; subscriberAccounts: SubscriberAccounts; startingPeriodId: number }): IGetReportByStreet => {
  const { name, type } = street;

  const streetName = `м. Нікополь, ${type} ${name}`;

  const amountIncrementFunc = (acc: number, { amount }: IAmount) => acc + amount;

  const balance = subscriberAccounts.map(({ balances }) => balances[0]).reduce(amountIncrementFunc, 0);
  const percentagePayments = ((totalBalance - startingBalance) / startingBalance) * 100;

  return {
    streetName,
    startingBalance,
    prices,
    payments,
    benefits: 0,
    subsidy: 0,
    totalBalance,
    percentagePayments,
  };
};

export default getReportByStreet;
