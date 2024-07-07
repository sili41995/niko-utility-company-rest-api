import { Response, Request } from 'express';
import GeneralSettingsService from '../services/generalSettings.service';
import { Endpoints } from '../constants';

export class GeneralSettingsController {
  constructor(private generalSettingsService: GeneralSettingsService) {
    this.generalSettingsService = generalSettingsService;
  }

  async get(req: Request, res: Response): Promise<void> {
    const result = await this.generalSettingsService.get();

    res.status(200).json(result);
  }

  async updateById(req: Request, res: Response): Promise<void> {
    const dynamicId = req.params[Endpoints.dynamicId];
    const id = Number(dynamicId);
    const result = await this.generalSettingsService.update({
      id,
      data: req.body,
    });

    res.status(200).json(result);
  }
}

const generalSettingsController = new GeneralSettingsController(new GeneralSettingsService());
export default generalSettingsController;
