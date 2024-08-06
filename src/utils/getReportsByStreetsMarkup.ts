import { HtmlDocumentStyles } from '../constants';
import { Periods } from '../types/period.type';
import { ReportsByStreets } from '../types/types.type';
import createHtmlMarkup from './createHtmlMarkup';

const getReportsByStreetsMarkup = ({ groupedReportsByStreetsData, targetPeriods }: { groupedReportsByStreetsData: ReportsByStreets[]; targetPeriods: Periods }): string => {
  const periodStart = '';
  const periodEnd = '';
  const subtitle = `за период з ${periodStart} по ${periodEnd}`;
  const reportsByStreets = createReportsByStreetsHtmlDocumentData({ title: '', subtitle, tablesData: groupedReportsByStreetsData });
  const htmlMarkup = createHtmlMarkup({ content: reportsByStreets, styles: HtmlDocumentStyles.reports });

  return htmlMarkup;
};

export default getReportsByStreetsMarkup;
