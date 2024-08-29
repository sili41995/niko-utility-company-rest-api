import { Document } from '@prisma/client';
import { IFindFilters } from './types.type';

export type Documents = Document[];

export interface IDocumentsFindFilters extends IFindFilters {
  name: string | undefined;
  comment: string | undefined;
}

export interface IFindAllDocumentsRes {
  data: Documents;
  count: number;
  filteredCount: number;
}
