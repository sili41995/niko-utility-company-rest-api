import path from 'path';
import html_to_pdf from 'html-pdf-node';
import fs from 'fs';

const saveInvoicesToPdf = async (invoices: string): Promise<string> => {
  const filename = 'invoices.pdf';
  const filePath = path.resolve('temp', filename);

  const options = { format: 'A4' };
  const file = { content: invoices };

  const pdfBuffer = (await html_to_pdf.generatePdf(file, options)) as unknown as Buffer;

  fs.writeFileSync(filePath, pdfBuffer);

  return filePath;
};

export default saveInvoicesToPdf;
