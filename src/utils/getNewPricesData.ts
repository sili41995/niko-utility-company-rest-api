import { SectorTypes } from '../constants';
import { NewPrices } from '../types/price.type';
import { INewPricesDataProps } from '../types/types.type';

const getNewPricesData = ({ subscriberAccounts, currentTariffs, currentPeriod }: INewPricesDataProps): NewPrices =>
  subscriberAccounts.map(({ id, residents, sector }) => {
    const { multiApartmentSectorTariff, otherSectorTariff, privateSectorTariff } = currentTariffs;
    const isMultiApartmentSector = sector === SectorTypes.multiApartment;
    const isPrivateSector = sector === SectorTypes.private;
    const isOtherSector = sector === SectorTypes.other;

    let amount = 0;

    if (isMultiApartmentSector) {
      amount = multiApartmentSectorTariff * residents;
    } else if (isPrivateSector) {
      amount = privateSectorTariff * residents;
    } else if (isOtherSector) {
      amount = otherSectorTariff * residents;
    }

    return {
      amount,
      date: new Date(),
      subscriberAccountId: id,
      periodId: currentPeriod.id,
    };
  });

export default getNewPricesData;
