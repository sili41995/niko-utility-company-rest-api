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
    const { number, street } = data;
    const house = await prisma.house.findFirst({ where: { number, street } });

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

  async getByStreetId(id: number): Promise<Houses | null> {
    const result = await prisma.house.findMany({ where: { street: id } });

    return result;
  }
}

export default HouseService;
