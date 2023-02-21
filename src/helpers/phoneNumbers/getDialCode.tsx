import { Countries } from '../../data';
import { CountryType, IsoCodeType } from '../../types';

// RETURNS: +49

const getDialCode = (isoCode: IsoCodeType): string | undefined => {
  const selectedCountry = Countries.find(
    (country: CountryType) => country.isoCode === isoCode
  );

  if (selectedCountry) {
    return selectedCountry.dialCode;
  }

  return undefined;
};

export default getDialCode;
