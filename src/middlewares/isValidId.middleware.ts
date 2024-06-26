import { NextFunction, Request, Response } from 'express';
import { httpError } from '../utils';
import { Endpoints } from '../constants';

const isValidId = (req: Request, res: Response, next: NextFunction): void => {
  const dynamicId = req.params[Endpoints.dynamicId];
  const isInvalidId = Number.isNaN(Number(dynamicId));

  if (isInvalidId) {
    return next(httpError({ status: 404, message: `${dynamicId} is not valid id` }));
  }

  next();
};

export default isValidId;
