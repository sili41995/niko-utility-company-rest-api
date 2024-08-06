import { HtmlDocumentStyles } from '../constants';
import { IGetInvoicesProps } from '../types/types.type';
import createHtmlMarkup from './createHtmlMarkup';
import createInvoice from './createInvoice';

const getInvoicesMarkup = ({ subscriberAccounts, generalSettings, period }: IGetInvoicesProps): string => {
  const invoices = subscriberAccounts.map((item) => createInvoice({ subscriberAccount: item, generalSettings, period })).join('');
  const htmlMarkup = createHtmlMarkup({ content: invoices, styles: HtmlDocumentStyles.invoices });

  return htmlMarkup;
};

export default getInvoicesMarkup;
