import { Response, Request } from 'express';
import SubscriberAccountService from '../services/subscriberAccount.service';
import { getSubscriberAccountsFindFilters } from '../utils';
import { Endpoints } from '../constants';

export class SubscriberAccountController {
  constructor(private subscriberAccountService: SubscriberAccountService) {
    this.subscriberAccountService = subscriberAccountService;
  }

  async getAll(req: Request, res: Response): Promise<void> {
    const findFilters = getSubscriberAccountsFindFilters(req.query);
    const result = await this.subscriberAccountService.getAll(findFilters);
    res.status(200).json(result);
  }

  async getByNumber(req: Request, res: Response): Promise<void> {
    const number = req.params[Endpoints.dynamicNumber];
    const result = await this.subscriberAccountService.getByNumber(number);

    res.status(200).json(result);
  }

  async add(req: Request, res: Response): Promise<void> {
    const result = await this.subscriberAccountService.add(req.body);

    res.status(201).json(result);
  }

  async updateById(req: Request, res: Response): Promise<void> {
    const dynamicId = req.params[Endpoints.dynamicId];
    const id = Number(dynamicId);
    const result = await this.subscriberAccountService.updateById({
      id,
      data: req.body,
    });

    res.status(200).json(result);
  }
}

const subscriberAccountController = new SubscriberAccountController(new SubscriberAccountService());
export default subscriberAccountController;
