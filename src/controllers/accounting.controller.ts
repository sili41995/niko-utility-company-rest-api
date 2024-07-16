import { Response, Request } from 'express';
import AccountingService from '../services/accounting.service';
import { getPaymentsFindFilters, httpError } from '../utils';
import pdf from 'html-pdf';
import path from 'path';
import { ErrorMessages } from '../constants';

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

  async getInvoices(req: Request, res: Response): Promise<void> {
    const htmlMarkup = await this.accountingService.getInvoices();
    const filename = 'invoices.pdf';
    const filePath = path.resolve('temp', filename);

    pdf
      .create(htmlMarkup, {
        format: 'A4',
      })
      .toFile(filePath, (err, file) => {
        if (err) {
          throw httpError({
            status: 404,
            message: ErrorMessages.fileNotFound,
          });
        }

        res.status(200).sendFile(file.filename);
      });
  }
}

const accountingController = new AccountingController(new AccountingService());
export default accountingController;
