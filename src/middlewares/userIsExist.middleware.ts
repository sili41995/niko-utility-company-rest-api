import { Response, Request, NextFunction } from 'express';
import { prisma } from '../app';
import { httpError } from '../utils';
import { Endpoints } from '../constants';

const userIsExist = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const dynamicId = req.params[Endpoints.dynamicId];
  const id = Number(dynamicId);

  const result = await prisma.user.findFirst({ where: { id } });

  if (!result) {
    next(httpError({ status: 404 }));
  }

  next();
};

export default userIsExist;
