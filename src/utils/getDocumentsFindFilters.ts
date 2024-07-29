import QueryString from 'qs';
import { Endpoints, GeneralParams } from '../constants';
import { IDocumentsFindFilters } from '../types/document.type';

const getDocumentsFindFilters = (query: QueryString.ParsedQs): IDocumentsFindFilters => {
  const pageQuery = query[Endpoints.dynamicPage];
  const limitQuery = query[Endpoints.dynamicLimit];
  const take = limitQuery ? Number(limitQuery) : GeneralParams.recordLimit;
  const skip = pageQuery ? (Number(pageQuery) - 1) * take : 0;
  const nameQuery = query[Endpoints.dynamicName];
  const commentQuery = query[Endpoints.dynamicComment];
  const name = nameQuery ? String(nameQuery) : undefined;
  const comment = commentQuery ? String(commentQuery) : undefined;

  return {
    skip,
    take,
    name,
    comment,
  };
};

export default getDocumentsFindFilters;
