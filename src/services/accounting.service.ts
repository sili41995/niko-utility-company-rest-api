import { Prisma } from '@prisma/client';
import { prisma } from '../app';
import { ErrorMessages, SectorTypes } from '../constants';
import { ICalculatePrices } from '../types/accounting.type';
import { httpError } from '../utils';

class SubscriberAccountService {
  async calculatePrices(): Promise<ICalculatePrices> {
    const currentDate = new Date();
    const tariffOrderBy: Prisma.TariffOrderByWithRelationInput = { start: 'desc' };
    const tariffDateFilter = { lte: currentDate };

    const multiApartmentSector = await prisma.tariff.findFirst({ where: { sector: SectorTypes.multiApartment, start: tariffDateFilter }, orderBy: tariffOrderBy });

    const privateSector = await prisma.tariff.findFirst({ where: { sector: SectorTypes.private, start: tariffDateFilter }, orderBy: tariffOrderBy });

    const otherSector = await prisma.tariff.findFirst({ where: { sector: SectorTypes.other, start: tariffDateFilter }, orderBy: tariffOrderBy });

    if (!multiApartmentSector) {
      throw httpError({
        status: 409,
        message: ErrorMessages.multiApartmentTariffNotFound,
      });
    }

    if (!privateSector) {
      throw httpError({
        status: 409,
        message: ErrorMessages.privateTariffNotFound,
      });
    }

    if (!otherSector) {
      throw httpError({
        status: 409,
        message: ErrorMessages.otherTariffNotFound,
      });
    }

    const { tariff: multiApartmentSectorTariff } = multiApartmentSector;
    const { tariff: privateSectorTariff } = privateSector;
    const { tariff: otherSectorTariff } = otherSector;

    await prisma.price.updateMany({ where: { subscriberAccount: { sector: SectorTypes.multiApartment } }, data: { price: { multiply: multiApartmentSectorTariff }, updatedAt: currentDate } });
    await prisma.price.updateMany({ where: { subscriberAccount: { sector: SectorTypes.private } }, data: { price: { multiply: privateSectorTariff }, updatedAt: currentDate } });
    await prisma.price.updateMany({ where: { subscriberAccount: { sector: SectorTypes.other } }, data: { price: { multiply: otherSectorTariff }, updatedAt: currentDate } });

    const count = await prisma.price.count();

    return {
      count,
      updatedAt: currentDate,
    };
  }
}

export default SubscriberAccountService;
