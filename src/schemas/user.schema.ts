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

const login = Joi.object({
  password: passwordSettings.required(),
  login: loginSettings.required(),
});

const addUser = Joi.object({
  password: passwordSettings.required(),
  email: emailSettings.required(),
  name: nameSettings.required(),
  login: loginSettings.required(),
});

const updateFullAccess = Joi.object()
  .keys({
    fullAccess: Joi.boolean(),
  })
  .messages({
    'object.unknown': ErrorMessages.unexpectedProperty,
  });

const updateHousesAccess = Joi.object()
  .keys({
    houses: Joi.boolean(),
  })
  .messages({
    'object.unknown': ErrorMessages.unexpectedProperty,
  });

const updateSubscribersAccess = Joi.object()
  .keys({
    subscribers: Joi.boolean(),
  })
  .messages({
    'object.unknown': ErrorMessages.unexpectedProperty,
  });

const updateAccountingAccess = Joi.object()
  .keys({
    accounting: Joi.boolean(),
  })
  .messages({
    'object.unknown': ErrorMessages.unexpectedProperty,
  });

const updateDocumentsAccess = Joi.object()
  .keys({
    documents: Joi.boolean(),
  })
  .messages({
    'object.unknown': ErrorMessages.unexpectedProperty,
  });

const updateCountersAccess = Joi.object()
  .keys({
    counters: Joi.boolean(),
  })
  .messages({
    'object.unknown': ErrorMessages.unexpectedProperty,
  });

const updateOneOffJobsAccess = Joi.object()
  .keys({
    oneOffJobs: Joi.boolean(),
  })
  .messages({
    'object.unknown': ErrorMessages.unexpectedProperty,
  });

const updateSettingsAccess = Joi.object()
  .keys({
    settings: Joi.boolean(),
  })
  .messages({
    'object.unknown': ErrorMessages.unexpectedProperty,
  });

const schemas = {
  login,
  addUser,
  updateFullAccess,
  updateHousesAccess,
  updateSubscribersAccess,
  updateAccountingAccess,
  updateDocumentsAccess,
  updateCountersAccess,
  updateOneOffJobsAccess,
  updateSettingsAccess,
};

export default schemas;
