import { HtmlDocumentStyles } from '../constants';
import { IGetReportsByHousesMarkupProps } from '../types/types.type';
import createHtmlMarkup from './createHtmlMarkup';
import createReportsByHousesHtmlDocumentData from './createReportsByHousesHtmlDocumentData';
import getTargetPeriodsParams from './getTargetPeriodsParams';

const getReportsByHousesMarkup = ({ reportsByHousesData, targetPeriods }: IGetReportsByHousesMarkupProps): string => {
  const { periodStart, periodEnd } = getTargetPeriodsParams(targetPeriods);

  const reportsByStreets = createReportsByHousesHtmlDocumentData({ periodStart, periodEnd, tableData: reportsByHousesData });

  const htmlMarkup = createHtmlMarkup({ content: reportsByStreets, styles: HtmlDocumentStyles.reports });

  return htmlMarkup;
};

export default getReportsByHousesMarkup;
