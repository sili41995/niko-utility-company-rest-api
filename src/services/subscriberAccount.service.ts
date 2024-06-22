import { prisma } from '../app';
import { ErrorMessages } from '../constants';
import { IFindAllSubscriberAccountsRes, ISubscriberAccount, NewSubscriberAccount } from '../types/subscriberAccount.type';
import { IFindFilters } from '../types/types.type';
import { httpError } from '../utils';

class SubscriberAccountService {
  async getAll({ skip, take }: IFindFilters): Promise<IFindAllSubscriberAccountsRes> {
    const result = await prisma.subscriberAccount.findMany({ orderBy: { subscriberAccount: 'asc' }, include: { house: true, street: true }, skip, take });
    const count = await prisma.subscriberAccount.count();

    return {
      data: result,
      count,
    };
  }

  async add(data: NewSubscriberAccount): Promise<ISubscriberAccount> {
    const subscriberAccount = await prisma.subscriberAccount.findFirst({ where: { OR: [{ subscriberAccount: data.subscriberAccount }, { contract: data.contract }] } });
    const isDuplicateSubscriberAccount = subscriberAccount && subscriberAccount.subscriberAccount === data.subscriberAccount;
    const isDuplicateContract = subscriberAccount && subscriberAccount.contract === data.contract;

    if (isDuplicateSubscriberAccount) {
      throw httpError({
        status: 409,
        message: ErrorMessages.duplicateSubscriberAccountErr,
      });
    } else if (isDuplicateContract) {
      throw httpError({
        status: 409,
        message: ErrorMessages.duplicateContractErr,
      });
    }

    const result = await prisma.subscriberAccount.create({
      data,
      include: { house: true, street: true },
    });

    return result;
  }
}

export default SubscriberAccountService;
