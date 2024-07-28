import Joi from 'joi';
import { ErrorMessages, PaymentSources } from '../constants';

const amountSettings = Joi.number().messages({
  'any.required': ErrorMessages.amountReqErr,
  'number.base': ErrorMessages.amountNumberErr,
});

const sourceSettings = Joi.string()
  .valid(
    PaymentSources.abank,
    PaymentSources.adjustment,
    PaymentSources.aval,
    PaymentSources.benefitCompensation,
    PaymentSources.cash,
    PaymentSources.oshchadbank,
    PaymentSources.postage,
    PaymentSources.privatbank,
    PaymentSources.ukrgasbank,
    PaymentSources.ukrsibbank
  )
  .messages({
    'any.required': ErrorMessages.paymentSourceReqErr,
    'any.only': ErrorMessages.paymentSourcesErr,
  });

const dateSettings = Joi.date().messages({
  'any.required': ErrorMessages.dateReqErr,
  'date.base': ErrorMessages.dateDateErr,
});

const subscriberAccountIdSettings = Joi.number().messages({
  'any.required': ErrorMessages.subscriberAccountIdReqErr,
  'number.base': ErrorMessages.subscriberAccountIdNumberErr,
});

const add = Joi.object({
  amount: amountSettings.required(),
  source: sourceSettings.required(),
  date: dateSettings.required(),
  subscriberAccountId: subscriberAccountIdSettings.required(),
});

const addMany = Joi.array().items(add);

const schemas = {
  add,
  addMany,
};

export default schemas;
