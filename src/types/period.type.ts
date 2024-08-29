import { Period } from '@prisma/client';

export interface IPeriodId {
  periodId: number;
}

export type Periods = Period[];
