import { prisma } from '../app';
import { ErrorMessages, SectorTypes } from '../constants';
import { ICurrentTariffs, ITariff, NewTariff, Tariffs } from '../types/tariff.type';
import { httpError } from '../utils';

class TariffService {
  async getAll(): Promise<Tariffs> {
    const result = await prisma.tariff.findMany({ orderBy: { start: 'desc' } });

    return result;
  }

  async getCurrent(): Promise<ICurrentTariffs> {
    const currentDate = new Date();
    const multiApartmentTariff = await prisma.tariff.findFirst({ where: { sector: SectorTypes.multiApartment, start: { lte: currentDate } }, orderBy: { start: 'desc' } });
    const privateTariff = await prisma.tariff.findFirst({ where: { sector: SectorTypes.private, start: { lte: currentDate } }, orderBy: { start: 'desc' } });
    const otherTariff = await prisma.tariff.findFirst({ where: { sector: SectorTypes.other, start: { lte: currentDate } }, orderBy: { start: 'desc' } });

    if (!multiApartmentTariff) {
      throw httpError({
        status: 409,
        message: ErrorMessages.multiApartmentTariffNotFound,
      });
    }

    if (!privateTariff) {
      throw httpError({
        status: 409,
        message: ErrorMessages.privateTariffNotFound,
      });
    }

    if (!otherTariff) {
      throw httpError({
        status: 409,
        message: ErrorMessages.otherTariffNotFound,
      });
    }

    return { multiApartmentTariff, privateTariff, otherTariff };
  }

  async add(data: NewTariff): Promise<ITariff> {
    const result = await prisma.tariff.create({ data });

    return result;
  }
}

export default TariffService;
