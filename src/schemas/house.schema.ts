import Joi from 'joi';
import { ErrorMessages, StreetTypes } from '../constants';

const numberSettings = Joi.string().messages({
  'any.required': ErrorMessages.numberReqErr,
});

const streetIdSettings = Joi.number().messages({
  'any.required': ErrorMessages.streetIdReqErr,
  'number.base': ErrorMessages.streetIdNumberErr,
});

const add = Joi.object({
  number: numberSettings.required(),
  streetId: streetIdSettings.required(),
});

const schemas = {
  add,
};

export default schemas;
