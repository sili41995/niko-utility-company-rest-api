import { ReportsBySubscribers } from '../types/report.type';
import { IFilterReportsBySubscriberProps } from '../types/types.type';

const filterReportsBySubscriber = ({ reportsBySubscribersData, minDebt }: IFilterReportsBySubscriberProps): ReportsBySubscribers =>
  reportsBySubscribersData.filter(({ totalBalance }) => totalBalance >= minDebt);

export default filterReportsBySubscriber;
