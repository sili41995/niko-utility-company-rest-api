import { PaymentSources } from '../constants';
import getSavedFilePath from './getSavedFilePath';

const getPaymentsBySourceFilePath = (paymentSource: PaymentSources) => {
  const fileName = `payments-${paymentSource}.csv`;
  const filePath = getSavedFilePath(fileName);

  return filePath;
};

export default getPaymentsBySourceFilePath;
