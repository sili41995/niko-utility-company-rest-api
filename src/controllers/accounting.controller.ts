import { Response, Request } from 'express';
import AccountingService from '../services/accounting.service';

export class AccountingController {
  constructor(private accountingService: AccountingService) {
    this.accountingService = accountingService;
  }

  async getCurrentPeriod(req: Request, res: Response): Promise<void> {
    const result = await this.accountingService.getCurrentPeriod();
    res.status(200).json(result);
  }

  async addPeriod(req: Request, res: Response): Promise<void> {
    const result = await this.accountingService.addPeriod();
    res.status(200).json(result);
  }
}

const accountingController = new AccountingController(new AccountingService());
export default accountingController;
