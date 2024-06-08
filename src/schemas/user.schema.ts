import Joi from 'joi';
import { ErrorMessages, ProfileSettings } from '../constants';
import { regExp } from '../constants';

const nameSettings = Joi.string().messages({
  'any.required': ErrorMessages.nameReqErr,
});

const loginSettings = Joi.string().pattern(regExp.login).messages({
  'any.required': ErrorMessages.loginReqErr,
  'string.pattern.base': ErrorMessages.loginRegExpErr,
});

const passwordSettings = Joi.string().pattern(regExp.notEmptyValue).min(ProfileSettings.passMinLength).max(ProfileSettings.passMaxLength).messages({
  'any.required': ErrorMessages.passReqErr,
  'string.min': ErrorMessages.passMinLengthErr,
  'string.max': ErrorMessages.passMaxLengthErr,
  'string.pattern.base': ErrorMessages.emptyStringErr,
});

const emailSettings = Joi.string().pattern(regExp.email).messages({
  'any.required': ErrorMessages.emailReqErr,
  'string.pattern.base': ErrorMessages.emailRegExpErr,
});

const loginSchema = Joi.object({
  password: passwordSettings.required(),
  login: loginSettings.required(),
});

const addUserSchema = Joi.object({
  password: passwordSettings.required(),
  email: emailSettings.required(),
  name: nameSettings.required(),
  login: loginSchema.required(),
});

const updateFullAccessSchema = Joi.object()
  .keys({
    fullAccess: Joi.boolean(),
  })
  .messages({
    'object.unknown': ErrorMessages.unexpectedProperty,
  });

const updateHousesAccessSchema = Joi.object()
  .keys({
    houses: Joi.boolean(),
  })
  .messages({
    'object.unknown': ErrorMessages.unexpectedProperty,
  });

const updateSubscribersAccessSchema = Joi.object()
  .keys({
    subscribers: Joi.boolean(),
  })
  .messages({
    'object.unknown': ErrorMessages.unexpectedProperty,
  });

const updateAccountingAccessSchema = Joi.object()
  .keys({
    accounting: Joi.boolean(),
  })
  .messages({
    'object.unknown': ErrorMessages.unexpectedProperty,
  });

const updateDocumentsAccessSchema = Joi.object()
  .keys({
    documents: Joi.boolean(),
  })
  .messages({
    'object.unknown': ErrorMessages.unexpectedProperty,
  });

const updateCountersAccessSchema = Joi.object()
  .keys({
    counters: Joi.boolean(),
  })
  .messages({
    'object.unknown': ErrorMessages.unexpectedProperty,
  });

const updateOneOffJobsAccessSchema = Joi.object()
  .keys({
    oneOffJobs: Joi.boolean(),
  })
  .messages({
    'object.unknown': ErrorMessages.unexpectedProperty,
  });

const updateSettingsAccessSchema = Joi.object()
  .keys({
    settings: Joi.boolean(),
  })
  .messages({
    'object.unknown': ErrorMessages.unexpectedProperty,
  });

const schemas = {
  loginSchema,
  addUserSchema,
  updateFullAccessSchema,
  updateHousesAccessSchema,
  updateSubscribersAccessSchema,
  updateAccountingAccessSchema,
  updateDocumentsAccessSchema,
  updateCountersAccessSchema,
  updateOneOffJobsAccessSchema,
  updateSettingsAccessSchema,
};

export default schemas;
