import { Balance } from '@prisma/client';

export type NewBalance = Omit<Balance, 'id' | 'createdAt' | 'period'>;

export type NewBalances = NewBalance[];

export type Balances = Balance[];
