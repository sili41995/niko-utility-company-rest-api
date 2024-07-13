import { Response, Request } from 'express';
import AccountingService from '../services/accounting.service';
import { Endpoints } from '../constants';

export class AccountingController {
  constructor(private accountingService: AccountingService) {
    this.accountingService = accountingService;
  }

  async getAllPeriods(req: Request, res: Response): Promise<void> {
    const result = await this.accountingService.getAllPeriods();
    res.status(200).json(result);
  }

  async addPeriod(req: Request, res: Response): Promise<void> {
    const result = await this.accountingService.addPeriod();
    res.status(201).json(result);
  }

  async getPrices(req: Request, res: Response): Promise<void> {
    const result = await this.accountingService.getPrices();
    res.status(200).json(result);
  }

  async calculatePrices(req: Request, res: Response): Promise<void> {
    const result = await this.accountingService.calculatePrices();
    res.status(200).json(result);
  }

  async addPriceAdjustment(req: Request, res: Response): Promise<void> {
    const result = await this.accountingService.addPriceAdjustment(req.body);
    res.status(201).json(result);
  }

  async addPayment(req: Request, res: Response): Promise<void> {
    const result = await this.accountingService.addPayment(req.body);
    res.status(201).json(result);
  }
}

const accountingController = new AccountingController(new AccountingService());
export default accountingController;
