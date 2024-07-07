import { Response, Request } from 'express';
import AccountingService from '../services/accounting.service';

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
}

const accountingController = new AccountingController(new AccountingService());
export default accountingController;
