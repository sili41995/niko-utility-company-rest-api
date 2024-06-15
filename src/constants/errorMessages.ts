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
  streetTypesErr = `Value of the type field must be one of these - '${StreetTypes.ave}', '${StreetTypes.descent}', '${StreetTypes.ln}', '${StreetTypes.st}' or '${StreetTypes.stn}'`,
  //duplicate
  duplicateLoginErr = 'Login already use',
  duplicateStreetErr = 'Street already use',
  duplicateHouseErr = 'House already use',
  //other
  incorrectCredentialsErr = 'Login or password is wrong',
  emptyStringErr = 'Value cannot be the empty string',
  unexpectedProperty = 'An unexpected property was found in the object',
  currentAccountRegExpErr = 'String must start with the letters UA followed by 27 digits',
  mfiRegExpErr = 'Value must consist of numbers only and be 6 characters long',
  missingFieldsErr = 'Missing fields',
  helpPhoneSettingsRegExpErr = 'Value must consist of numbers only and may contain spaces and hyphens',
  typeReqErr = 'Missing required type field',
  numberReqErr = 'Missing required number field',
}

export default ErrorMessages;
