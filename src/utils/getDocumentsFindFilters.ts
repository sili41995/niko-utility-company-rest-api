import QueryString from 'qs';
import { Endpoints, GeneralParams } from '../constants';
import { IDocumentsFindFilters } from '../types/document.type';

const getDocumentsFindFilters = (query: QueryString.ParsedQs): IDocumentsFindFilters => {
  const pageQuery = query[Endpoints.dynamicPage];
  const limitQuery = query[Endpoints.dynamicLimit];
  const take = limitQuery ? Number(limitQuery) : GeneralParams.recordLimit;
  const skip = pageQuery ? (Number(pageQuery) - 1) * take : 0;
  const documentQuery = query[Endpoints.dynamicDocument];
  const commentQuery = query[Endpoints.dynamicComment];
  const document = documentQuery ? String(documentQuery) : undefined;
  const comment = commentQuery ? String(commentQuery) : undefined;

  return {
    skip,
    take,
    document,
    comment,
  };
};

export default getDocumentsFindFilters;
