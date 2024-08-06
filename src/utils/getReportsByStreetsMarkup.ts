import { HtmlDocumentStyles } from '../constants';
import { IGetReportsByStreetsMarkupProps } from '../types/types.type';
import createHtmlMarkup from './createHtmlMarkup';
import createReportsByStreetsHtmlDocumentData from './createReportsByStreetsHtmlDocumentData';
import getTargetPeriodsParams from './getTargetPeriodsParams';

const getReportsByStreetsMarkup = ({ reportsByStreetsData, targetPeriods }: IGetReportsByStreetsMarkupProps): string => {
  const { periodStart, periodEnd } = getTargetPeriodsParams(targetPeriods);

  const title = 'Розрахунки по вулицях';
  const subtitle = `за период з ${periodStart} по ${periodEnd}`;
  const reportsByStreets = createReportsByStreetsHtmlDocumentData({ title, subtitle, tableData: reportsByStreetsData });

  const htmlMarkup = createHtmlMarkup({ content: reportsByStreets, styles: HtmlDocumentStyles.reports });

  return htmlMarkup;
};

export default getReportsByStreetsMarkup;
