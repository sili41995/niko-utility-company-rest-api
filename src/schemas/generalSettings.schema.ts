import Joi from 'joi';
import { ErrorMessages } from '../constants';
import { regExp } from '../constants';

const currentAccountSettings = Joi.string().pattern(regExp.currentAccount).messages({
  'string.pattern.base': ErrorMessages.currentAccountRegExpErr,
});

const mfiSettings = Joi.number().integer().min(100000).max(999999).messages({
  'any.required': ErrorMessages.mfiReqErr,
  'number.base': ErrorMessages.mfiNumberErr,
});

const helpPhoneSettings = Joi.string().pattern(regExp.phone).messages({
  'string.pattern.base': ErrorMessages.helpPhoneRegExpErr,
});

const adsInPaymentsSettings = Joi.string().allow(null);

const updateById = Joi.object({
  currentAccount: currentAccountSettings,
  mfi: mfiSettings,
  helpPhone: helpPhoneSettings,
  adsInPayments: adsInPaymentsSettings,
})
  .min(1)
  .messages({
    'object.min': ErrorMessages.missingFieldsErr,
  });

const schemas = {
  updateById,
};

export default schemas;
