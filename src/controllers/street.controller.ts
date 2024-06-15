import { Response, Request } from 'express';
import StreetService from '../services/street.service';

export class StreetController {
  constructor(private streetService: StreetService) {
    this.streetService = streetService;
  }

  async getAll(req: Request, res: Response): Promise<void> {
    const result = await this.streetService.getAll();
    res.status(200).json(result);
  }

  async add(req: Request, res: Response): Promise<void> {
    const result = await this.streetService.add(req.body);

    res.status(201).json(result);
  }
}

const streetController = new StreetController(new StreetService());
export default streetController;
