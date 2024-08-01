import { SectorTypes } from '../constants';
import { NewPrices } from '../types/price.type';
import { INewPricesDataProps } from '../types/types.type';

const getNewPricesData = ({ subscriberAccounts, currentTariffsId, currentPeriod }: INewPricesDataProps): NewPrices =>
  subscriberAccounts.map(({ id, residents, sector }) => {
    const { multiApartmentSectorTariffId, otherSectorTariffId, privateSectorTariffId } = currentTariffsId;
    const isMultiApartmentSector = sector === SectorTypes.multiApartment;
    const isPrivateSector = sector === SectorTypes.private;
    const tariffId = (isMultiApartmentSector && multiApartmentSectorTariffId) || (isPrivateSector && privateSectorTariffId) || otherSectorTariffId;

    return {
      date: new Date(),
      residents,
      tariffId,
      subscriberAccountId: id,
      periodId: currentPeriod.id,
    };
  });

export default getNewPricesData;
