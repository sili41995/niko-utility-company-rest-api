import { Response, Request } from 'express';
import DocumentService from '../services/document.service';
import { getDocumentsFindFilters } from '../utils';

export class DocumentController {
  constructor(private documentService: DocumentService) {
    this.documentService = documentService;
  }

  async getAll(req: Request, res: Response): Promise<void> {
    const findFilters = getDocumentsFindFilters(req.query);
    const result = await this.documentService.getAll(findFilters);
    res.status(200).json(result);
  }
}

const documentController = new DocumentController(new DocumentService());
export default documentController;
