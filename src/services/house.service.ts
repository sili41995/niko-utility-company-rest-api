import { prisma } from '../app';
import { ErrorMessages } from '../constants';
import { IHouse, NewHouse, Houses } from '../types/house.type';
import { httpError } from '../utils';

class HouseService {
  async getAll(): Promise<Houses> {
    const result = await prisma.house.findMany({ orderBy: { number: 'asc' } });

    return result;
  }

  async add(data: NewHouse): Promise<IHouse> {
    const house = await prisma.house.findFirst({ where: { number: data.number, street: data.street } });

    if (house) {
      throw httpError({
        status: 409,
        message: ErrorMessages.duplicateHouseErr,
      });
    }

    const result = await prisma.house.create({
      data,
    });

    return result;
  }

  async getById(id: number): Promise<IHouse | null> {
    const result = await prisma.house.findUnique({ where: { id }, include: { Street: true } });

    return result;
  }
}

export default HouseService;
