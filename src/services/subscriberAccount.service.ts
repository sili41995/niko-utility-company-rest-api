import { Prisma } from '@prisma/client';
import { prisma } from '../app';
import { ErrorMessages } from '../constants';
import { IFindAllSubscriberAccountsRes, ISubscriberAccount, ISubscriberAccountsFindFilters, IUpdateSubscriberAccountByIdProps, INewSubscriberAccount } from '../types/subscriberAccount.type';
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
        payments: { include: { period: true }, orderBy: { date: 'desc' } },
        priceAdjustments: { include: { period: true }, orderBy: { date: 'desc' } },
        prices: { include: { period: true }, orderBy: { date: 'desc' } },
        balances: { include: { period: true }, orderBy: { createdAt: 'desc' } },
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
    const result = await prisma.subscriberAccount.findFirst({
      where: { number },
      include: {
        owner: true,
        street: true,
        balances: { include: { period: true } },
        house: { include: { street: true } },
        prices: { include: { period: true } },
        priceAdjustments: { include: { period: true } },
        payments: { include: { period: true } },
      },
    });

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

    const currentPeriod = await prisma.period.findFirst({ where: { isCurrentPeriod: true } });

    if (!currentPeriod) {
      throw httpError({
        status: 404,
        message: ErrorMessages.periodNotFound,
      });
    }

    await prisma.balance.create({ data: { amount: 0, subscriberAccountId, periodId: currentPeriod.id } });
    const result = await prisma.subscriberAccount.findUnique({
      where: { id: subscriberAccountId },
      include: {
        street: true,
        owner: true,
        documents: true,
        balances: { include: { period: true } },
        house: { include: { street: true } },
        prices: { include: { period: true } },
        priceAdjustments: { include: { period: true } },
        payments: { include: { period: true } },
      },
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
      include: {
        owner: true,
        street: true,
        balances: { include: { period: true } },
        documents: { orderBy: { createdAt: 'desc' } },
        house: { include: { street: true } },
        prices: { include: { period: true } },
        priceAdjustments: { include: { period: true } },
        payments: { include: { period: true } },
      },
    });

    return result;
  }
}

export default SubscriberAccountService;
