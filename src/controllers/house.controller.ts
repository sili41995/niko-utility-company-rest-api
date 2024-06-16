import { Response, Request } from 'express';
import HouseService from '../services/house.service';
import { Endpoints } from '../constants';

export class HouseController {
  constructor(private houseService: HouseService) {
    this.houseService = houseService;
  }

  async getAll(req: Request, res: Response): Promise<void> {
    const result = await this.houseService.getAll();
    res.status(200).json(result);
  }

  async add(req: Request, res: Response): Promise<void> {
    const result = await this.houseService.add(req.body);

    res.status(201).json(result);
  }

  async getByStreetId(req: Request, res: Response): Promise<void> {
    const dynamicId = req.params[Endpoints.dynamicId];
    const id = Number(dynamicId);
    const result = await this.houseService.getByStreetId(id);

    res.status(200).json(result);
  }
}

const houseController = new HouseController(new HouseService());
export default houseController;
