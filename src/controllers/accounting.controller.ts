import { Response, Request } from 'express';
import AccountingService from '../services/accounting.service';
import { getPaymentsFindFilters, httpError } from '../utils';
import pdf from 'html-pdf';
import path from 'path';
import { ErrorMessages } from '../constants';
import html_to_pdf from 'html-pdf-node';

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

    const options = { format: 'A4' };
    let file = { content: '<h1>Welcome to html-pdf-node</h1>', name: 'example.pdf' };

    const pdfBuffer = await html_to_pdf.generatePdf(file, options);

    console.log('PDF Buffer:-', pdfBuffer);

    // pdf
    //   .create(htmlMarkup, {
    //     format: 'A4',
    //   })
    //   .toFile(filePath, (err, file) => {
    //     if (err) {
    //       console.log(err);
    //       throw httpError({
    //         status: 404,
    //         // message: ErrorMessages.fileNotFound,
    //         message: err.message,
    //       });
    //     }

    //   });
    res.status(200).json(pdfBuffer);
  }
}

const accountingController = new AccountingController(new AccountingService());
export default accountingController;
