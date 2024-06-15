import { prisma } from '../app';
import { IGeneralSettings, IUpdateGeneralSettingsProps } from '../types/generalSettings.type';

class GeneralSettingsService {
  async get(): Promise<IGeneralSettings | null> {
    const result = await prisma.generalSettings.findFirst();

    return result;
  }

  async update({ id, data }: IUpdateGeneralSettingsProps): Promise<IGeneralSettings> {
    const result = await prisma.generalSettings.update({ where: { id }, data });

    return result;
  }
}

export default GeneralSettingsService;
