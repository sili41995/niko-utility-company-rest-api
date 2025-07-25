import AccountTypes from './accountTypes';
import PaymentSources from './paymentSources';
import ProfileSettings from './profileSettings';
import SectorTypes from './sectorTypes';
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
  duplicateSubscriberAccountErr = 'Subscriber account already use',
  duplicateLoginErr = 'Login already use',
  duplicateStreetErr = 'Street already use',
  duplicateHouseErr = 'House already use',
  duplicateContractErr = 'Contract already use',
  //phones
  helpPhoneRegExpErr = 'Help hone number must consist of numbers only and may contain +, - and spaces.',
  phoneReqErr = 'Missing required phone field',
  phoneRegExpErr = 'Phone number must consist of numbers only and may contain +, - and spaces.',
  additionalPhoneRegExpErr = 'Additional phone number must consist of numbers only and may contain +, - and spaces.',
  additionalPhoneReqErr = 'Missing required additional phone field',
  //tariff
  tariffReqErr = 'Missing required tariff field',
  tariffNumberErr = 'Tariff field must be a number',
  sectorReqErr = 'Missing required sector field',
  sectorTypesErr = `Value of the sector field must be one of these - '${SectorTypes.multiApartment}', '${SectorTypes.private}' or '${SectorTypes.other}'`,
  startReqErr = 'Missing required start field',
  startDateErr = 'Start field must be a date',
  privateTariffNotFound = 'Tariff for the private sector was not found',
  multiApartmentTariffNotFound = 'Tariff for the multi-apartment sector was not found',
  otherTariffNotFound = 'Tariff for the other sector was not found',
  //subscriberAccount
  apartmentReqErr = 'Missing required apartment field',
  subscriberAccountReqErr = 'Missing required subscriber account field',
  numberNumberErr = 'Number field must be a number',
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
  accountTypeReqErr = 'Missing required account type field',
  accountTypesErr = `Value of the account type field must be one of these - '${AccountTypes.individual}' or '${AccountTypes.legalEntity}'`,
  houseIdReqErr = 'Missing required house id field',
  houseIdNumberErr = 'House id field must be a number',
  streetIdReqErr = 'Missing required street id field',
  streetIdNumberErr = 'Street id field must be a number',
  isEligibleForBenefitReqErr = 'Missing required is eligible for benefit field',
  isEligibleForBenefitBooleanErr = 'Is eligible for benefit field must be a boolean',
  priceNotFound = 'Price was not found',
  ownerReqErr = 'Missing required owner field',
  subscriberAccountNotFound = 'Subscriber account was not found',
  //other
  incorrectCredentialsErr = 'Login or password is wrong',
  emptyStringErr = 'Value cannot be the empty string',
  unexpectedProperty = 'An unexpected property was found in the object',
  currentAccountRegExpErr = 'String must start with the letters UA followed by 27 digits',
  mfiReqErr = 'Missing required mfi field',
  mfiNumberErr = 'Mfi field must be a number',
  missingFieldsErr = 'Missing fields',
  typeReqErr = 'Missing required type field',
  numberReqErr = 'Missing required number field',
  duplicateDocumentErr = 'Document already use',
  periodNotFound = 'Period was not found',
  duplicatePeriodErr = 'Period already use',
  priceNumberErr = 'Price field must be a number',
  priceReqErr = 'Missing required price field',
  dateDateErr = 'Date field must be a date',
  dateReqErr = 'Missing required date field',
  commentReqErr = 'Missing required comment field',
  subscriberAccountIdNumberErr = 'Subscriber account id field must be a number',
  subscriberAccountIdReqErr = 'Missing required subscriber account id field',
  paymentSourceReqErr = 'Missing required source field',
  paymentSourcesErr = `Value of the source field must be one of these - '${PaymentSources.abank}', '${PaymentSources.adjustment}', '${PaymentSources.aval}', '${PaymentSources.benefits}', '${PaymentSources.cash}', '${PaymentSources.oshchadbank}', '${PaymentSources.postage}', '${PaymentSources.privatbank}', '${PaymentSources.ukrgasbank}' or '${PaymentSources.ukrsibbank}'`,
  amountReqErr = 'Missing required amount field',
  amountNumberErr = 'Amount field must be a number',
  fileNotFound = 'File was not found',
  generalSettingsNotFound = 'General settings was not found',
}

export default ErrorMessages;
