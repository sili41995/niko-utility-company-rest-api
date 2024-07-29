import { Prisma } from '@prisma/client';
import { prisma } from '../app';
import { ErrorMessages } from '../constants';
import {
  IFindAllSubscriberAccountsRes,
  ISubscriberAccount,
  ISubscriberAccountsFindFilters,
  IUpdateSubscriberAccountByIdProps,
  INewSubscriberAccount,
  IPricesInfo,
} from '../types/subscriberAccount.type';
import { httpError } from '../utils';

class SubscriberAccountService {
  async getAll({ skip, take, surname, name, number, type, street, house, apartment }: ISubscriberAccountsFindFilters): Promise<IFindAllSubscriberAccountsRes> {
    const where: Prisma.SubscriberAccountWhereInput = {
      owner: { surname: { startsWith: surname, mode: 'insensitive' }, name: { startsWith: name, mode: 'insensitive' } },
      number: { startsWith: number },
      accountType: type,
      street: { name: { startsWith: street } },
      house: { number: { startsWith: house } },
      apartment: { startsWith: apartment },
    };
    const result = await prisma.subscriberAccount.findMany({
      where,
      orderBy: { number: 'asc' },
      include: {
        street: true,
        owner: true,
        house: { include: { street: true } },
        documents: { orderBy: { createdAt: 'desc' } },
        payments: { orderBy: { date: 'desc' } },
        priceAdjustments: { orderBy: { date: 'desc' } },
        prices: { include: { period: true }, orderBy: { date: 'desc' } },
      },
      skip,
      take,
    });
    const count = await prisma.subscriberAccount.count();
    const filteredCount = await prisma.subscriberAccount.count({ where });

    return {
      data: result,
      count,
      filteredCount,
    };
  }

  async getByNumber(number: string): Promise<ISubscriberAccount> {
    const result = await prisma.subscriberAccount.findFirst({ where: { number }, include: { street: true, house: { include: { street: true } }, owner: true } });

    if (!result) {
      throw httpError({
        status: 404,
        message: ErrorMessages.subscriberAccountNotFound,
      });
    }

    return result;
  }

  async add(data: INewSubscriberAccount): Promise<ISubscriberAccount> {
    const subscriberAccount = await prisma.subscriberAccount.findFirst({ where: { OR: [{ number: data.number }, { contract: data.contract }] } });
    const isDuplicateSubscriberAccount = subscriberAccount && subscriberAccount.number === data.number;
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

    const { owner, ...subscriberAccountData } = data;
    const { id: subscriberAccountId } = await prisma.subscriberAccount.create({
      data: subscriberAccountData,
    });
    await prisma.owner.create({ data: { ...owner, subscriberAccountId } });
    const result = await prisma.subscriberAccount.findUnique({
      where: { id: subscriberAccountId },
      include: { house: { include: { street: true } }, street: true, owner: true, documents: { orderBy: { createdAt: 'desc' } } },
    });

    if (!result) {
      throw httpError({
        status: 404,
        message: ErrorMessages.subscriberAccountNotFound,
      });
    }

    return result;
  }

  async updateById({ id, data }: IUpdateSubscriberAccountByIdProps): Promise<ISubscriberAccount> {
    const { comment, name, owner, ...subscriberAccountData } = data;

    const documentResult = await prisma.document.findFirst({ where: { name } });

    if (documentResult) {
      throw httpError({
        status: 409,
        message: ErrorMessages.duplicateDocumentErr,
      });
    }

    await prisma.document.create({ data: { name, comment, subscriberAccountId: id } });

    if (owner) {
      await prisma.owner.update({ where: { subscriberAccountId: id }, data: owner });
    }

    const result = await prisma.subscriberAccount.update({
      where: { id },
      data: subscriberAccountData,
      include: { house: { include: { street: true } }, owner: true, street: true, documents: { orderBy: { createdAt: 'desc' } } },
    });

    return result;
  }
}

export default SubscriberAccountService;
