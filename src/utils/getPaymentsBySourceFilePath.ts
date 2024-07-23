import path from 'path';
import { PaymentSources } from '../constants';

const getPaymentsBySourceFilePath = (paymentSource: PaymentSources) => {
  const fileName = `payments-${paymentSource}.csv`;
  return path.resolve('temp', fileName);
};

export default getPaymentsBySourceFilePath;
