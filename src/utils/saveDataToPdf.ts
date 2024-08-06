import getSavedFilePath from './getSavedFilePath';
import html_to_pdf from 'html-pdf-node';
import fs from 'fs';
import { ISaveDataToPdfProps } from '../types/types.type';

const saveDataToPdf = async ({ content, fileName, landscape = false }: ISaveDataToPdfProps): Promise<string> => {
  const filePath = getSavedFilePath(fileName);

  const options = { format: 'A4', landscape };
  const file = { content };

  const pdfBuffer = (await html_to_pdf.generatePdf(file, options)) as unknown as Buffer;

  fs.writeFileSync(filePath, pdfBuffer);

  return filePath;
};

export default saveDataToPdf;
