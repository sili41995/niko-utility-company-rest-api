import { IGetInvoicesProps } from '../types/types.type';
import createHtmlMarkup from './createHtmlMarkup';
import createInvoice from './createInvoice';

const getInvoices = ({ subscriberAccounts }: IGetInvoicesProps): string => {
  const invoices = subscriberAccounts.map((item) => createInvoice()).join('');
  const htmlMarkup = createHtmlMarkup(invoices);

  return htmlMarkup;
};

export default getInvoices;
