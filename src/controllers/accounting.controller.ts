import { Response, Request, NextFunction } from 'express';
import AccountingService from '../services/accounting.service';
import { getPaymentsFindFilters, removeFile } from '../utils';

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

  async getAllPayments(req: Request, res: Response): Promise<void> {
    const findFilters = getPaymentsFindFilters(req.query);
    const result = await this.accountingService.getAllPayments(findFilters);
    res.status(200).json(result);
  }

  async addPayment(req: Request, res: Response): Promise<void> {
    const result = await this.accountingService.addPayment(req.body);

    res.status(201).json(result);
  }

  async getInvoices(req: Request, res: Response, next: NextFunction): Promise<void> {
    const filePath = await this.accountingService.getInvoices();

    res.status(200).sendFile(filePath, {}, removeFile(filePath));
  }
}

const accountingController = new AccountingController(new AccountingService());
export default accountingController;
