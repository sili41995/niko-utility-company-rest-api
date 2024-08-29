import { GeneralSettings } from '@prisma/client';
import { prisma } from '../app';
import { IUpdateGeneralSettingsProps } from '../types/generalSettings.type';

class GeneralSettingsService {
  async get(): Promise<GeneralSettings | null> {
    const result = await prisma.generalSettings.findFirst();

    return result;
  }

  async update({ id, data }: IUpdateGeneralSettingsProps): Promise<GeneralSettings> {
    const result = await prisma.generalSettings.update({ where: { id }, data });

    return result;
  }
}

export default GeneralSettingsService;
