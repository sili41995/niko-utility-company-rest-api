import Joi from 'joi';
import { ErrorMessages } from '../constants';
import { regExp } from '../constants';

const currentAccountSettings = Joi.string().pattern(regExp.currentAccount).messages({
  'string.pattern.base': ErrorMessages.currentAccountRegExpErr,
});

const mfiSettings = Joi.string().pattern(regExp.mfi).messages({
  'string.pattern.base': ErrorMessages.mfiRegExpErr,
});

const helpPhoneSettings = Joi.string().pattern(regExp.helpPhone).messages({
  'string.pattern.base': ErrorMessages.helpPhoneSettingsRegExpErr,
});

const updateGeneralSettingsSchema = Joi.object({
  currentAccount: currentAccountSettings,
  mfi: mfiSettings,
  helpPhone: helpPhoneSettings,
  adsInPayments: Joi.string(),
})
  .min(1)
  .messages({
    'object.min': ErrorMessages.missingFieldsErr,
  });

const schemas = {
  updateGeneralSettingsSchema,
};

export default schemas;
