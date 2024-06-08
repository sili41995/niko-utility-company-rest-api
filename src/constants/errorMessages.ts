import ProfileSettings from './profileSettings';

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
  //other
  incorrectCredentialsErr = 'Login or password is wrong',
  emptyStringErr = 'Value cannot be the empty string',
  duplicateLoginErr = 'Login already use',
  unexpectedProperty = 'An unexpected property was found in the object',
}

export default ErrorMessages;
