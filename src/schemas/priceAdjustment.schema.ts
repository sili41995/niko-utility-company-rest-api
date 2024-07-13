import Joi from 'joi';
import { ErrorMessages } from '../constants';

const priceSettings = Joi.number().messages({
  'any.required': ErrorMessages.priceReqErr,
  'number.base': ErrorMessages.priceNumberErr,
});

const dateSettings = Joi.date().messages({
  'any.required': ErrorMessages.dateReqErr,
  'date.base': ErrorMessages.dateDateErr,
});

const commentSettings = Joi.string().messages({
  'any.required': ErrorMessages.commentReqErr,
});

const subscriberAccountIdSettings = Joi.number().messages({
  'any.required': ErrorMessages.subscriberAccountIdReqErr,
  'number.base': ErrorMessages.subscriberAccountIdNumberErr,
});

const add = Joi.object({
  price: priceSettings.required(),
  date: dateSettings.required(),
  comment: commentSettings.required(),
  subscriberAccountId: subscriberAccountIdSettings.required(),
});

const schemas = {
  add,
};

export default schemas;
