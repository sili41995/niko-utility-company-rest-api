import { Request, Response, NextFunction } from 'express';
import { ArraySchema, ObjectSchema } from 'joi';
import { httpError } from '../utils';

const validateBody =
  <T>(schema: ObjectSchema<T> | ArraySchema<T>) =>
  (req: Request, res: Response, next: NextFunction): void => {
    const { error } = schema.validate(req.body);

    if (error) {
      throw httpError({ status: 400, message: error.message });
    }

    next();
  };

export default validateBody;
