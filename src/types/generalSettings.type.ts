import { GeneralSettings } from '@prisma/client';

export type GeneralSettingsData = Pick<GeneralSettings, 'adsInPayments' | 'currentAccount' | 'helpPhone' | 'mfi'>;

export interface IUpdateGeneralSettingsProps {
  id: number;
  data: GeneralSettingsData;
}
