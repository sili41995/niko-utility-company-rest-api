import QueryString from 'qs';
import { Endpoints, GeneralParams } from '../constants';
import { ISubscriberAccountsFindFilters } from '../types/subscriberAccount.type';

const getSubscriberAccountsFindFilters = (query: QueryString.ParsedQs): ISubscriberAccountsFindFilters => {
  const pageQuery = query[Endpoints.dynamicPage];
  const limitQuery = query[Endpoints.dynamicLimit];
  const take = limitQuery ? Number(limitQuery) : GeneralParams.recordLimit;
  const skip = pageQuery ? (Number(pageQuery) - 1) * take : 0;
  const numberQuery = query[Endpoints.dynamicNumber];
  const apartmentQuery = query[Endpoints.dynamicApartment];
  const houseQuery = query[Endpoints.dynamicHouse];
  const nameQuery = query[Endpoints.dynamicName];
  const streetQuery = query[Endpoints.dynamicStreet];
  const surnameQuery = query[Endpoints.dynamicSurname];
  const typeQuery = query[Endpoints.dynamicType];
  const apartment = apartmentQuery ? String(apartmentQuery) : undefined;
  const number = numberQuery ? String(numberQuery) : undefined;
  const house = houseQuery ? String(houseQuery) : undefined;
  const name = nameQuery ? String(nameQuery) : undefined;
  const street = streetQuery ? String(streetQuery) : undefined;
  const surname = surnameQuery ? String(surnameQuery) : undefined;
  const type = typeQuery ? String(typeQuery) : undefined;

  return {
    skip,
    take,
    number,
    apartment,
    house,
    name,
    street,
    surname,
    type,
  };
};

export default getSubscriberAccountsFindFilters;
