import Joi from 'joi';
import { ErrorMessages, StreetTypes } from '../constants';

const numberSettings = Joi.string().messages({
  'any.required': ErrorMessages.numberReqErr,
});

const streetSettings = Joi.number().messages({
  'any.required': ErrorMessages.streetReqErr,
  'number.base': ErrorMessages.streetNumberErr,
});

const add = Joi.object({
  number: numberSettings.required(),
  street: streetSettings.required(),
});

const schemas = {
  add,
};

export default schemas;
