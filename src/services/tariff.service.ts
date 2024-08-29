import { Tariff } from '@prisma/client';
import { prisma } from '../app';
import { NewTariff, Tariffs } from '../types/tariff.type';

class TariffService {
  async getAll(): Promise<Tariffs> {
    const result = await prisma.tariff.findMany({ orderBy: { start: 'desc' } });

    return result;
  }

  async add(data: NewTariff): Promise<Tariff> {
    const result = await prisma.tariff.create({ data });

    return result;
  }
}

export default TariffService;
