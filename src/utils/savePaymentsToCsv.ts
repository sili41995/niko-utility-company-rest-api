import { createObjectCsvWriter } from 'csv-writer';
import { ISavePaymentsToCsvProps } from '../types/types.type';

const savePaymentsToCsv = async ({ filePath, payments }: ISavePaymentsToCsvProps): Promise<void> => {
  const csvWriter = createObjectCsvWriter({
    path: filePath,
    header: [
      { id: 'subscriberAccount', title: 'Абонентський рахунок' },
      { id: 'fullName', title: 'ПІБ' },
      { id: 'address', title: 'Адреса' },
      { id: 'service', title: 'Послуга' },
      { id: 'balance', title: 'Борг' },
      { id: 'date', title: 'Дата' },
    ],
  });

  await csvWriter.writeRecords(payments);
};

export default savePaymentsToCsv;
