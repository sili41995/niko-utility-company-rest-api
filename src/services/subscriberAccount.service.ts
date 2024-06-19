import { prisma } from '../app';
import { ErrorMessages } from '../constants';
import { IStreet, NewStreet, Streets } from '../types/street.type';
import { SubscriberAccounts } from '../types/subscriberAccount.type';
import { httpError } from '../utils';

class SubscriberAccountService {
  async getAll(): Promise<SubscriberAccounts> {
    const result = await prisma.subscriberAccount.findMany({ orderBy: { subscriberAccount: 'asc' } });

    return result;
  }

  // async add(data: NewStreet): Promise<IStreet> {
  //   const street = await prisma.street.findUnique({ where: { name: data.name } });

  //   if (street) {
  //     throw httpError({
  //       status: 409,
  //       message: ErrorMessages.duplicateStreetErr,
  //     });
  //   }

  //   const result = await prisma.street.create({
  //     data,
  //   });

  //   return result;
  // }
}

export default SubscriberAccountService;
