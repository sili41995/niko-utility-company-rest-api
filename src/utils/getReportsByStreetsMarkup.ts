import { HtmlDocumentStyles } from '../constants';
import { IGetReportsByStreetsMarkupProps } from '../types/types.type';
import createHtmlMarkup from './createHtmlMarkup';
import createReportsByStreetsHtmlDocumentData from './createReportsByStreetsHtmlDocumentData';
import getTargetPeriodsParams from './getTargetPeriodsParams';

const getReportsByStreetsMarkup = ({ reportsByStreetsData, targetPeriods }: IGetReportsByStreetsMarkupProps): string => {
  const { periodStart, periodEnd } = getTargetPeriodsParams(targetPeriods);

  const reportsByStreets = createReportsByStreetsHtmlDocumentData({ periodStart, periodEnd, tableData: reportsByStreetsData });

  const htmlMarkup = createHtmlMarkup({ content: reportsByStreets, styles: HtmlDocumentStyles.reports });

  return htmlMarkup;
};

export default getReportsByStreetsMarkup;
