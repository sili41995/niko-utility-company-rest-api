import { Response, Request, NextFunction } from 'express';
import AccountingService from '../services/accounting.service';
import { getPaymentsFindFilters, getReportsFindFilters, removeFile } from '../utils';
import { PaymentSources } from '../constants';

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

  async addPrices(req: Request, res: Response): Promise<void> {
    const result = await this.accountingService.addPrices();

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

  async addPayments(req: Request, res: Response): Promise<void> {
    const result = await this.accountingService.addPayments(req.body);

    res.status(201).json(result);
  }

  async getInvoices(req: Request, res: Response, next: NextFunction): Promise<void> {
    const filePath = await this.accountingService.getInvoices();

    res.status(200).sendFile(filePath, {}, removeFile(filePath));
  }

  async getPaymentsBySourcePostage(req: Request, res: Response, next: NextFunction): Promise<void> {
    const filePath = await this.accountingService.getPaymentsBySource(PaymentSources.postage);

    res.status(200).sendFile(filePath, {}, removeFile(filePath));
  }

  async getPaymentsBySourcePrivatbank(req: Request, res: Response, next: NextFunction): Promise<void> {
    const filePath = await this.accountingService.getPaymentsBySource(PaymentSources.privatbank);

    res.status(200).sendFile(filePath, {}, removeFile(filePath));
  }

  async getPaymentsBySourceOshchadbank(req: Request, res: Response, next: NextFunction): Promise<void> {
    const filePath = await this.accountingService.getPaymentsBySource(PaymentSources.oshchadbank);

    res.status(200).sendFile(filePath, {}, removeFile(filePath));
  }

  async getPaymentsBySourceAbank(req: Request, res: Response, next: NextFunction): Promise<void> {
    const filePath = await this.accountingService.getPaymentsBySource(PaymentSources.abank);

    res.status(200).sendFile(filePath, {}, removeFile(filePath));
  }

  async getReportsByStreets(req: Request, res: Response, next: NextFunction): Promise<void> {
    const findFilters = getReportsFindFilters(req.query);
    const filePath = await this.accountingService.getReportsByStreets(findFilters);

    // res.status(200).sendFile(filePath, {}, removeFile(filePath));
    res.status(200).sendFile(filePath);
  }
}

const accountingController = new AccountingController(new AccountingService());
export default accountingController;
