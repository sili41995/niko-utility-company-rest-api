import QueryString from 'qs';
import { Endpoints, GeneralParams } from '../constants';
import { IFindFilters } from '../types/types.type';

const getFindFilters = (query: QueryString.ParsedQs): IFindFilters => {
  const pageQuery = query[Endpoints.dynamicPage];
  const limitQuery = query[Endpoints.dynamicLimit];
  const take = limitQuery ? Number(limitQuery) : GeneralParams.recordLimit;
  const skip = pageQuery ? (Number(pageQuery) - 1) * take : 0;
  const accountQuery = query[Endpoints.dynamicAccount];
  const apartmentQuery = query[Endpoints.dynamicApartment];
  const houseQuery = query[Endpoints.dynamicHouse];
  const nameQuery = query[Endpoints.dynamicName];
  const streetQuery = query[Endpoints.dynamicStreet];
  const surnameQuery = query[Endpoints.dynamicSurname];
  const typeQuery = query[Endpoints.dynamicType];
  const apartment = apartmentQuery ? String(apartmentQuery) : undefined;
  const account = accountQuery ? String(accountQuery) : undefined;
  const house = houseQuery ? String(houseQuery) : undefined;
  const name = nameQuery ? String(nameQuery) : undefined;
  const street = streetQuery ? String(streetQuery) : undefined;
  const surname = surnameQuery ? String(surnameQuery) : undefined;
  const type = typeQuery ? String(typeQuery) : undefined;

  return {
    skip,
    take,
    account,
    apartment,
    house,
    name,
    street,
    surname,
    type,
  };
};

export default getFindFilters;
