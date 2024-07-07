import { IGetYearParams } from '../types/accounting.type';

const getYearParams = (): IGetYearParams => {
  const currentYear = new Date().getFullYear();

  const yearStart = `${currentYear}-01-01T00:00:00.000Z`;
  const yearEnd = `${currentYear}-12-31T23:59:59.000Z`;

  return { yearStart, yearEnd };
};

export default getYearParams;
