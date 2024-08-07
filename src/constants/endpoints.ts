const enum Endpoints {
  // accounting
  periods = '/periods',
  prices = '/prices',
  invoices = '/invoices',
  //  dynamic params
  dynamicId = 'id',
  dynamicNumber = 'number',
  dynamicPage = 'page',
  dynamicLimit = 'limit',
  dynamicApartment = 'apartment',
  dynamicHouse = 'house',
  dynamicName = 'name',
  dynamicStreet = 'street',
  dynamicSurname = 'surname',
  dynamicType = 'type',
  dynamicComment = 'comment',
  dynamicFrom = 'from',
  dynamicTo = 'to',
  // reports
  reports = '/reports',
  reportsByStreets = `${reports}/streets`,
  reportsByHouses = `${reports}/houses`,
  //payments
  payments = '/payments',
  postagePayments = `${payments}/postage`,
  multiplePayments = `${payments}/multiple`,
  privatbankPayments = `${payments}/privatbank`,
  oshchadbankPayments = `${payments}/oshchadbank`,
  abankPayments = `${payments}/abank`,
  // other
  root = '/',
  login = '/signin',
  current = '/current',
  updateById = `/:${dynamicId}`,
}

export default Endpoints;
