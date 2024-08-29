import { Street } from '@prisma/client';

export type NewStreet = Pick<Street, 'name' | 'type'>;

export type Streets = Street[];
