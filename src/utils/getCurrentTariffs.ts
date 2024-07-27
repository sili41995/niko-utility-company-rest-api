import { Prisma } from '@prisma/client';
import { ErrorMessages, SectorTypes } from '../constants';
import httpError from './httpError';
import { prisma } from '../app';
import { ICurrentTariffs } from '../types/tariff.type';

const getCurrentTariffs = async (): Promise<ICurrentTariffs> => {
  const currentDate = new Date();
  const tariffOrderBy: Prisma.TariffOrderByWithRelationInput = { start: 'desc' };
  const tariffDateFilter = { lte: currentDate };

  const multiApartmentSector = await prisma.tariff.findFirst({ where: { sector: SectorTypes.multiApartment, start: tariffDateFilter }, orderBy: tariffOrderBy });

  const privateSector = await prisma.tariff.findFirst({ where: { sector: SectorTypes.private, start: tariffDateFilter }, orderBy: tariffOrderBy });

  const otherSector = await prisma.tariff.findFirst({ where: { sector: SectorTypes.other, start: tariffDateFilter }, orderBy: tariffOrderBy });

  if (!multiApartmentSector) {
    throw httpError({
      status: 404,
      message: ErrorMessages.multiApartmentTariffNotFound,
    });
  }

  if (!privateSector) {
    throw httpError({
      status: 404,
      message: ErrorMessages.privateTariffNotFound,
    });
  }

  if (!otherSector) {
    throw httpError({
      status: 404,
      message: ErrorMessages.otherTariffNotFound,
    });
  }

  const { tariff: multiApartmentSectorTariff } = multiApartmentSector;
  const { tariff: privateSectorTariff } = privateSector;
  const { tariff: otherSectorTariff } = otherSector;

  return { multiApartmentSectorTariff, privateSectorTariff, otherSectorTariff };
};

export default getCurrentTariffs;
