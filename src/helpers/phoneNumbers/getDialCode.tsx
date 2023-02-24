import { Countries } from '../../data/countries/Countries';
import { CountryType, IsoCodeType } from '../../types';

// RETURNS: +49

export const getDialCode = (isoCode: IsoCodeType): string | undefined => {
  const selectedCountry = Countries.find(
    (country: CountryType) => country.isoCode === isoCode,
  );

  if (selectedCountry) {
    return selectedCountry.dialCode;
  }

  return undefined;
};
