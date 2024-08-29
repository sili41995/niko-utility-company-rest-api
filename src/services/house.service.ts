import { House } from '@prisma/client';
import { prisma } from '../app';
import { ErrorMessages } from '../constants';
import { NewHouse, Houses } from '../types/house.type';
import { httpError } from '../utils';

class HouseService {
  async getAll(): Promise<Houses> {
    const result = await prisma.house.findMany({ orderBy: { number: 'asc' }, include: { street: true } });

    return result;
  }

  async add(data: NewHouse): Promise<House> {
    const { number, streetId } = data;
    const house = await prisma.house.findFirst({ where: { number, streetId } });

    if (house) {
      throw httpError({
        status: 409,
        message: ErrorMessages.duplicateHouseErr,
      });
    }

    const result = await prisma.house.create({
      data,
      include: { street: true },
    });

    return result;
  }

  async getByStreetId(id: number): Promise<Houses | null> {
    const result = await prisma.house.findMany({ where: { streetId: id }, include: { street: true }, orderBy: { number: 'asc' } });

    return result;
  }
}

export default HouseService;
