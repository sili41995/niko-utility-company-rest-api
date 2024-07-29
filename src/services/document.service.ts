import { Prisma } from '@prisma/client';
import { prisma } from '../app';
import { IFindAllDocumentsRes, IDocumentsFindFilters } from '../types/document.type';

class DocumentService {
  async getAll({ skip, take, comment, name }: IDocumentsFindFilters): Promise<IFindAllDocumentsRes> {
    const where: Prisma.DocumentWhereInput = {
      comment: { startsWith: comment, mode: 'insensitive' },
      name: { startsWith: name, mode: 'insensitive' },
    };
    const result = await prisma.document.findMany({ where, orderBy: { createdAt: 'desc' }, skip, take });
    const count = await prisma.document.count();
    const filteredCount = await prisma.document.count({ where });

    return {
      data: result,
      count,
      filteredCount,
    };
  }
}

export default DocumentService;
