import QueryString from 'qs';
import { Endpoints } from '../constants';
import { IReportsFindFilters } from '../types/accounting.type';

const getReportsFindFilters = (query: QueryString.ParsedQs): IReportsFindFilters => {
  const fromQuery = query[Endpoints.dynamicFrom];
  const toQuery = query[Endpoints.dynamicTo];

  return {
    from: String(fromQuery),
    to: String(toQuery),
  };
};

export default getReportsFindFilters;
