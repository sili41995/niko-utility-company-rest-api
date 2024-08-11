import { DateFormats, HtmlDocumentStyles } from '../constants';
import { IGetReportsBySubscribersMarkupProps } from '../types/types.type';
import createHtmlMarkup from './createHtmlMarkup';
import createReportsBySubscribersHtmlDocumentData from './createReportsBySubscribersHtmlDocumentData';
import formatDate from './formatDate';

const getReportsBySubscribersMarkup = ({ reportsBySubscribersData, period, minDebt }: IGetReportsBySubscribersMarkupProps): string => {
  const periodDate = formatDate({ date: period.start, dateFormat: DateFormats.period });
  const reportsBySubscribers = createReportsBySubscribersHtmlDocumentData({ periodDate, minDebt, tableData: reportsBySubscribersData });

  const htmlMarkup = createHtmlMarkup({ content: reportsBySubscribers, styles: HtmlDocumentStyles.reports });

  return htmlMarkup;
};

export default getReportsBySubscribersMarkup;
