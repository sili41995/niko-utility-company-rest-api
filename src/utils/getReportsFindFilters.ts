import QueryString from 'qs';
import { Endpoints } from '../constants';
import { IReportsFindFilters } from '../types/accounting.type';

const getReportsFindFilters = (query: QueryString.ParsedQs): IReportsFindFilters => {
  const fromQuery = query[Endpoints.dynamicFrom];
  const toQuery = query[Endpoints.dynamicTo];
  const streetIdQuery = query[Endpoints.dynamicStreetId];
  const houseIdQuery = query[Endpoints.dynamicHouseId];
  const periodIdQuery = query[Endpoints.dynamicPeriodId];
  const minDebtQuery = query[Endpoints.dynamicMinDebt];
  const from = String(fromQuery);
  const to = String(toQuery);
  const streetId = streetIdQuery ? Number(streetIdQuery) : undefined;
  const houseId = houseIdQuery ? Number(houseIdQuery) : undefined;
  const minDebt = Number(minDebtQuery);
  const periodId = Number(periodIdQuery);

  return {
    from,
    to,
    minDebt,
    houseId,
    periodId,
    streetId,
  };
};

export default getReportsFindFilters;
