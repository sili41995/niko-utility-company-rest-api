import { Street } from '@prisma/client';
import { prisma } from '../app';
import { ErrorMessages } from '../constants';
import { NewStreet, Streets } from '../types/street.type';
import { httpError } from '../utils';

class StreetService {
  async getAll(): Promise<Streets> {
    const result = await prisma.street.findMany({ orderBy: { name: 'asc' } });

    return result;
  }

  async add(data: NewStreet): Promise<Street> {
    const street = await prisma.street.findUnique({ where: { name: data.name } });

    if (street) {
      throw httpError({
        status: 409,
        message: ErrorMessages.duplicateStreetErr,
      });
    }

    const result = await prisma.street.create({
      data,
    });

    return result;
  }
}

export default StreetService;
