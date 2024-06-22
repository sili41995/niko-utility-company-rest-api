import Joi from 'joi';
import { AccountTypes, ErrorMessages, StreetTypes, regExp } from '../constants';

// const nameSettings = Joi.string().messages({
//   'any.required': ErrorMessages.nameReqErr,
// });

// const typeSettings = Joi.string().valid(StreetTypes.ave, StreetTypes.descent, StreetTypes.ln, StreetTypes.st, StreetTypes.stn).messages({
//   'any.required': ErrorMessages.typeReqErr,
//   'any.only': ErrorMessages.streetTypesErr,
// });

const apartmentSettings = Joi.number().messages({
  'any.required': ErrorMessages.apartmentReqErr,
  'number.base': ErrorMessages.apartmentNumberErr,
});

const subscriberAccountSettings = Joi.number().messages({
  'any.required': ErrorMessages.subscriberAccountReqErr,
  'number.base': ErrorMessages.subscriberAccountNumberErr,
});

const contractSettings = Joi.string().messages({
  'any.required': ErrorMessages.contractReqErr,
});

const contractDateSettings = Joi.date().messages({
  'any.required': ErrorMessages.contractDateReqErr,
  'date.base': ErrorMessages.contractDateErr,
});

const isLivingApartmentSettings = Joi.boolean().messages({
  'any.required': ErrorMessages.isLivingApartmentReqErr,
  'boolean.base': ErrorMessages.isLivingApartmentBooleanErr,
});

const residentsSettings = Joi.number().messages({
  'any.required': ErrorMessages.residentsReqErr,
  'number.base': ErrorMessages.residentsNumberErr,
});

const periodSettings = Joi.date().messages({
  'any.required': ErrorMessages.periodReqErr,
  'date.base': ErrorMessages.periodDateErr,
});

const isRemovalHouseholdWasteSettings = Joi.boolean().messages({
  'any.required': ErrorMessages.isRemovalHouseholdWasteReqErr,
  'boolean.base': ErrorMessages.isRemovalHouseholdWasteBooleanErr,
});

const utrSettings = Joi.string().messages({
  'any.required': ErrorMessages.utrReqErr,
});

const passportSettings = Joi.string().messages({
  'any.required': ErrorMessages.passportReqErr,
});

const surnameSettings = Joi.string().messages({
  'any.required': ErrorMessages.surnameReqErr,
});

const nameSettings = Joi.string().messages({
  'any.required': ErrorMessages.nameReqErr,
});

const middleNameSettings = Joi.string().messages({
  'any.required': ErrorMessages.middleNameReqErr,
});

const isEligibleForBenefitSettings = Joi.boolean().messages({
  'any.required': ErrorMessages.isEligibleForBenefitReqErr,
  'boolean.base': ErrorMessages.isEligibleForBenefitBooleanErr,
});

const phoneSettings = Joi.string().pattern(regExp.phone).messages({
  'any.required': ErrorMessages.phoneReqErr,
  'string.pattern.base': ErrorMessages.phoneRegExpErr,
});

const additionalPhoneSettings = Joi.string().pattern(regExp.phone).messages({
  'any.required': ErrorMessages.additionalPhoneReqErr,
  'string.pattern .base': ErrorMessages.additionalPhoneRegExpErr,
});

const accountTypeSettings = Joi.string()
  .valid(
    AccountTypes.budgetaryInstitution,
    AccountTypes.condominiumAssociation,
    AccountTypes.housingCooperative,
    AccountTypes.individual,
    AccountTypes.legalEntity,
    AccountTypes.residentialBuildingCooperative
  )
  .messages({
    'any.required': ErrorMessages.accountTypeReqErr,
    'any.only': ErrorMessages.accountTypesErr,
  });

const houseIdSettings = Joi.number().messages({
  'any.required': ErrorMessages.houseIdReqErr,
  'number.base': ErrorMessages.houseIdNumberErr,
});

const streetIdSettings = Joi.number().messages({
  'any.required': ErrorMessages.streetIdReqErr,
  'number.base': ErrorMessages.streetIdNumberErr,
});

const emailSettings = Joi.string().pattern(regExp.email).messages({
  'string.pattern.base': ErrorMessages.emailRegExpErr,
});

const commentSettings = Joi.string();

const birthdaySettings = Joi.string();

const add = Joi.object({
  apartment: apartmentSettings.required(),
  subscriberAccount: subscriberAccountSettings.required(),
  contract: contractSettings.required(),
  contractDate: contractDateSettings.required(),
  isLivingApartment: isLivingApartmentSettings.required(),
  residents: residentsSettings.required(),
  period: periodSettings.required(),
  isRemovalHouseholdWaste: isRemovalHouseholdWasteSettings.required(),
  utr: utrSettings.required(),
  passport: passportSettings.required(),
  surname: surnameSettings.required(),
  name: nameSettings.required(),
  middleName: middleNameSettings.required(),
  isEligibleForBenefit: isEligibleForBenefitSettings.required(),
  phone: phoneSettings.required(),
  additionalPhone: additionalPhoneSettings.required(),
  accountType: accountTypeSettings.required(),
  houseId: houseIdSettings.required(),
  streetId: streetIdSettings.required(),
  email: emailSettings,
  birthday: birthdaySettings,
  comment: commentSettings,
});

const schemas = {
  add,
};

export default schemas;
