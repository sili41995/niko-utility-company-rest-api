import QueryString from 'qs';
import { Endpoints } from '../constants';
import { ITimePeriod } from '../types/types.type';

const getReportsFindFilters = (query: QueryString.ParsedQs): ITimePeriod => {
  const fromQuery = query[Endpoints.dynamicFrom];
  const toQuery = query[Endpoints.dynamicTo];

  return {
    from: String(fromQuery),
    to: String(toQuery),
  };
};

export default getReportsFindFilters;
