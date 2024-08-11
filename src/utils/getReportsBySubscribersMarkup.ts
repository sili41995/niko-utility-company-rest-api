import { HtmlDocumentStyles } from '../constants';
import { IGetReportsBySubscribersMarkupProps } from '../types/types.type';
import createHtmlMarkup from './createHtmlMarkup';

const getReportsBySubscribersMarkup = ({ reportsBySubscribersData, period }: IGetReportsBySubscribersMarkupProps): string => {
  const reportsBySubscribers = createReportsBySubscribersHtmlDocumentData({ period, tableData: reportsBySubscribersData });

  const htmlMarkup = createHtmlMarkup({ content: reportsBySubscribers, styles: HtmlDocumentStyles.reports });

  return htmlMarkup;
};

export default getReportsBySubscribersMarkup;
