import { Prisma } from '@prisma/client';
import { prisma } from '../app';
import { ErrorMessages } from '../constants';
import { IFindAllSubscriberAccountsRes, ISubscriberAccount, ISubscriberAccountsFindFilters, IUpdateSubscriberAccountByIdProps, NewSubscriberAccount } from '../types/subscriberAccount.type';
import { httpError } from '../utils';

class SubscriberAccountService {
  async getAll({ skip, take, surname, name, account, type, street, house, apartment }: ISubscriberAccountsFindFilters): Promise<IFindAllSubscriberAccountsRes> {
    const where: Prisma.SubscriberAccountWhereInput = {
      surname: { startsWith: surname, mode: 'insensitive' },
      name: { startsWith: name, mode: 'insensitive' },
      subscriberAccount: { startsWith: account },
      accountType: type,
      street: { name: { startsWith: street } },
      house: { number: { startsWith: house } },
      apartment: { startsWith: apartment },
    };
    const result = await prisma.subscriberAccount.findMany({ where, orderBy: { subscriberAccount: 'asc' }, include: { house: true, street: true, documents: true }, skip, take });
    const count = await prisma.subscriberAccount.count();
    const filteredCount = await prisma.subscriberAccount.count({ where });

    return {
      data: result,
      count,
      filteredCount,
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
      include: { house: true, street: true, documents: true },
    });

    return result;
  }

  async updateById({ id, data }: IUpdateSubscriberAccountByIdProps): Promise<ISubscriberAccount> {
    await prisma.document.create({ data: { document: data.document, comment: data.comment, subscriberAccountId: id } });
    const result = await prisma.subscriberAccount.update({ where: { id }, data, include: { house: true, street: true, documents: true } });

    return result;
  }
}

export default SubscriberAccountService;
