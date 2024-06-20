import AccountTypes from './accountTypes';
import ProfileSettings from './profileSettings';
import StreetTypes from './streetTypes';

const enum ErrorMessages {
  //login
  loginReqErr = 'Missing required login field',
  loginRegExpErr = 'Login cannot contain spaces',
  //password
  passReqErr = 'Missing required password field',
  passMinLengthErr = `Password length must be at least ${ProfileSettings.passMinLength} characters long`,
  passMaxLengthErr = `Password length must be no more than ${ProfileSettings.passMaxLength} characters long`,
  //email
  emailReqErr = 'Missing required email field',
  emailRegExpErr = 'Email must be letters, digits, dot, special symbols and @',
  //name
  nameReqErr = 'Missing required name field',
  //street
  streetReqErr = 'Missing required street field',
  streetNumberErr = 'Street field must be a number',
  streetTypesErr = `Value of the street type field must be one of these - '${StreetTypes.ave}', '${StreetTypes.descent}', '${StreetTypes.ln}', '${StreetTypes.st}' or '${StreetTypes.stn}'`,
  //duplicate
  duplicateLoginErr = 'Login already use',
  duplicateStreetErr = 'Street already use',
  duplicateHouseErr = 'House already use',
  duplicateContractErr = 'Contract already use',
  //other
  incorrectCredentialsErr = 'Login or password is wrong',
  emptyStringErr = 'Value cannot be the empty string',
  unexpectedProperty = 'An unexpected property was found in the object',
  currentAccountRegExpErr = 'String must start with the letters UA followed by 27 digits',
  mfiRegExpErr = 'Value must consist of numbers only and be 6 characters long',
  missingFieldsErr = 'Missing fields',
  helpPhoneRegExpErr = 'Help phone must consist of numbers only and may contain spaces and hyphens',
  phoneRegExpErr = 'Phone must consist of numbers only and may contain spaces and hyphens',
  additionalPhoneRegExpErr = 'Additional phone must consist of numbers only and may contain spaces and hyphens',
  typeReqErr = 'Missing required type field',
  numberReqErr = 'Missing required number field',
  apartmentReqErr = 'Missing required apartment field',
  apartmentNumberErr = 'Apartment field must be a number',
  subscriberAccountReqErr = 'Missing required subscriber account field',
  subscriberAccountNumberErr = 'Subscriber account field must be a number',
  contractReqErr = 'Missing required contract field',
  contractDateReqErr = 'Missing required contract date field',
  contractDateErr = 'Contract date field must be a date',
  isLivingApartmentReqErr = 'Missing required is living apartment field',
  isLivingApartmentBooleanErr = 'Is living apartment field must be a boolean',
  residentsReqErr = 'Missing required residents field',
  residentsNumberErr = 'Residents field must be a number',
  periodReqErr = 'Missing required period field',
  periodDateErr = 'Period field must be a date',
  isRemovalHouseholdWasteReqErr = 'Missing required is removal household waste field',
  isRemovalHouseholdWasteBooleanErr = 'Is removal household waste field must be a boolean',
  utrReqErr = 'Missing required UTR field',
  passportReqErr = 'Missing required passport field',
  surnameReqErr = 'Missing required surname field',
  middleNameReqErr = 'Missing required middle name field',
  phoneReqErr = 'Missing required phone field',
  additionalPhoneReqErr = 'Missing required additional phone field',
  accountTypeReqErr = 'Missing required account type field',
  accountTypesErr = `Value of the account type field must be one of these - '${AccountTypes.budgetaryInstitution}', '${AccountTypes.condominiumAssociation}', '${AccountTypes.housingCooperative}', '${AccountTypes.individual}', '${AccountTypes.legalEntity}' or '${AccountTypes.residentialBuildingCooperative}'`,
  houseReqErr = 'Missing required house field',
  houseNumberErr = 'House field must be a number',
  duplicateSubscriberAccountErr = 'Subscriber account already use',
  isEligibleForBenefitReqErr = 'Missing required is eligible for benefit field',
  isEligibleForBenefitBooleanErr = 'Is eligible for benefit field must be a boolean',
}

export default ErrorMessages;
// 'Missing required _____ field';
// '_____ field must be a _____',
