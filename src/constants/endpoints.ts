const enum Endpoints {
  root = '/',
  //   register = '/register',
  login = '/signin',
  //   logout = '/logout',
  current = '/current',
  user = '/user',
  dynamicId = 'id',
  fullAccess = `/:${dynamicId}/fullAccess`,
  houses = `/:${dynamicId}/houses`,
  subscribers = `/:${dynamicId}/subscribers`,
  accounting = `/:${dynamicId}/accounting`,
  documents = `/:${dynamicId}/documents`,
  counters = `/:${dynamicId}/counters`,
  oneOffJobs = `/:${dynamicId}/oneOffJobs`,
  settings = `/:${dynamicId}`,
  dynamicPage = 'page',
  dynamicLimit = 'limit',
}

export default Endpoints;
