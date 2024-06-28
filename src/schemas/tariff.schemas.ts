import Joi from 'joi';
import { ErrorMessages, SectorTypes } from '../constants';

const tariffSettings = Joi.number().messages({
  'any.required': ErrorMessages.tariffReqErr,
  'number.base': ErrorMessages.tariffNumberErr,
});

const sectorSettings = Joi.string().valid(SectorTypes.multiApartment, SectorTypes.private, SectorTypes.other).messages({
  'any.required': ErrorMessages.sectorReqErr,
  'any.only': ErrorMessages.sectorTypesErr,
});

const startSettings = Joi.date().messages({
  'any.required': ErrorMessages.startReqErr,
  'date.base': ErrorMessages.startDateErr,
});

const add = Joi.object({
  tariff: tariffSettings.required(),
  sector: sectorSettings.required(),
  start: startSettings.required(),
});

const schemas = {
  add,
};

export default schemas;
