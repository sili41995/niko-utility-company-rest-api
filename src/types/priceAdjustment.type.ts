import { PriceAdjustment } from '@prisma/client';

export type NewPriceAdjustment = Omit<PriceAdjustment, 'id' | 'subscriberAccount' | 'period'>;

export type PriceAdjustments = PriceAdjustment[];
