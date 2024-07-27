import { SectorTypes } from '../constants';
import { NewPrices } from '../types/price.type';
import { INewPricesDataProps } from '../types/types.type';

const getNewPricesData = ({ subscriberAccounts, currentTariffs, currentPeriod }: INewPricesDataProps): NewPrices =>
  subscriberAccounts.map(({ id, residents, sector }) => {
    const { multiApartmentSectorTariff, otherSectorTariff, privateSectorTariff } = currentTariffs;
    const isMultiApartmentSector = sector === SectorTypes.multiApartment;
    const isPrivateSector = sector === SectorTypes.private;
    const isOtherSector = sector === SectorTypes.other;
    const tariff = isMultiApartmentSector ? multiApartmentSectorTariff : isPrivateSector ? privateSectorTariff : isOtherSector ? otherSectorTariff : 0;

    return {
      amount: residents * tariff,
      date: new Date(),
      residents,
      tariff,
      subscriberAccountId: id,
      periodId: currentPeriod.id,
    };
  });

export default getNewPricesData;
