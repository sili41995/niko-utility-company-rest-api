import { Response, Request } from 'express';
import SubscriberAccountService from '../services/subscriberAccount.service';

export class SubscriberAccountController {
  constructor(private subscriberAccountService: SubscriberAccountService) {
    this.subscriberAccountService = subscriberAccountService;
  }

  async getAll(req: Request, res: Response): Promise<void> {
    const result = await this.subscriberAccountService.getAll();
    res.status(200).json(result);
  }

  // async add(req: Request, res: Response): Promise<void> {
  //   const result = await this.subscriberAccountService.add(req.body);

  //   res.status(201).json(result);
  // }
}

const subscriberAccountController = new SubscriberAccountController(new SubscriberAccountService());
export default subscriberAccountController;
