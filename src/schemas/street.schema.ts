import Joi from 'joi';
import { ErrorMessages, StreetTypes } from '../constants';

const nameSettings = Joi.string().messages({
  'any.required': ErrorMessages.nameReqErr,
});

const typeSettings = Joi.string().valid(StreetTypes.ave, StreetTypes.descent, StreetTypes.ln, StreetTypes.st, StreetTypes.stn).messages({
  'any.required': ErrorMessages.typeReqErr,
  'any.only': ErrorMessages.streetTypesErr,
});

const add = Joi.object({
  name: nameSettings.required(),
  type: typeSettings.required(),
});

const schemas = {
  add,
};

export default schemas;
