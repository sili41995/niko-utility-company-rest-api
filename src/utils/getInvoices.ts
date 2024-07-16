import { IGetInvoicesProps } from '../types/types.type';
import createHtmlMarkup from './createHtmlMarkup';
import createInvoice from './createInvoice';

const getInvoices = ({ subscriberAccounts, generalSettings, period }: IGetInvoicesProps): string => {
  const invoices = subscriberAccounts.map((item) => createInvoice({ subscriberAccount: item, generalSettings, period })).join('');
  const htmlMarkup = createHtmlMarkup(invoices);

  return htmlMarkup;
};

export default getInvoices;
