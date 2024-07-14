import QueryString from 'qs';
import { Endpoints, GeneralParams } from '../constants';
import { IFindFilters } from '../types/types.type';

const getPaymentsFindFilters = (query: QueryString.ParsedQs): IFindFilters => {
  const pageQuery = query[Endpoints.dynamicPage];
  const limitQuery = query[Endpoints.dynamicLimit];
  const take = limitQuery ? Number(limitQuery) : GeneralParams.recordLimit;
  const skip = pageQuery ? (Number(pageQuery) - 1) * take : 0;

  return {
    skip,
    take,
  };
};

export default getPaymentsFindFilters;
