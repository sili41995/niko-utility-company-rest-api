import { IFindFilters } from './types.type';

export interface IDocument {
  id: number;
  document: string;
  comment: string;
  subscriberAccountId: number;
  createdAt: Date;
}

export type Documents = IDocument[];

export interface IDocumentsFindFilters extends IFindFilters {
  document: string | undefined;
  comment: string | undefined;
}

export interface IFindAllDocumentsRes {
  data: Documents;
  count: number;
  filteredCount: number;
}
