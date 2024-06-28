import { Response, Request } from 'express';
import TariffService from '../services/tariff.service';

export class TariffController {
  constructor(private tariffService: TariffService) {
    this.tariffService = tariffService;
  }

  async getAll(req: Request, res: Response): Promise<void> {
    const result = await this.tariffService.getAll();
    res.status(200).json(result);
  }

  async getCurrent(req: Request, res: Response): Promise<void> {
    const result = await this.tariffService.getCurrent();
    res.status(200).json(result);
  }

  async add(req: Request, res: Response): Promise<void> {
    const result = await this.tariffService.add(req.body);

    res.status(201).json(result);
  }
}

const tariffController = new TariffController(new TariffService());
export default tariffController;
