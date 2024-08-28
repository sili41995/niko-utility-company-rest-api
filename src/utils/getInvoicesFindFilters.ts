import QueryString from 'qs';
import { Endpoints } from '../constants';
import { IInvoicesFindFilters } from '../types/types.type';

const getInvoicesFindFilters = (query: QueryString.ParsedQs): IInvoicesFindFilters => {
  const streetIdQuery = query[Endpoints.dynamicStreetId];
  const houseIdQuery = query[Endpoints.dynamicHouseId];
  const streetId = streetIdQuery ? Number(streetIdQuery) : undefined;
  const houseId = houseIdQuery ? Number(houseIdQuery) : undefined;

  return {
    houseId,
    streetId,
  };
};

export default getInvoicesFindFilters;
