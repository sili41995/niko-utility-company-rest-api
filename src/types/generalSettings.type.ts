export interface IGeneralSettings {
  id: number;
  currentAccount: string;
  mfi: string;
  helpPhone: string;
  adsInPayments: string | null;
}

export type GeneralSettingsData = Pick<IGeneralSettings, 'adsInPayments' | 'currentAccount' | 'helpPhone' | 'mfi'>;

export interface IUpdateGeneralSettingsProps {
  id: number;
  data: GeneralSettingsData;
}
