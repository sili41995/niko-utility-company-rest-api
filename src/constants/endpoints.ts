const enum Endpoints {
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
  dynamicStreetId = 'streetId',
  dynamicHouseId = 'houseId',
  dynamicPeriodId = 'periodId',
  dynamicMinDebt = 'debt',
  // accounting
  periods = '/periods',
  prices = '/prices',
  invoices = `/invoices`,
  // reports
  reports = '/reports',
  reportsByStreets = `${reports}/streets`,
  reportsByHouses = `${reports}/houses`,
  reportsBySubscribers = `${reports}/subscribers`,
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
