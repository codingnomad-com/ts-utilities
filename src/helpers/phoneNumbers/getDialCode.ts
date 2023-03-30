import { Countries } from '~/data/countries/Countries';
import { CountryType } from '~/data/countries/types/CountryType';
import { Maybe } from '~/types/Maybe';
import { GetDialCodeProps } from './interfaces/GetDialCodeProps';

// RETURNS: +49

export const getDialCode = (props: GetDialCodeProps): Maybe<string> => {
  const { isoCode } = props;

  const selectedCountry = Countries.find(
    (country: CountryType) => country.isoCode === isoCode,
  );

  if (selectedCountry) {
    return selectedCountry.dialCode;
  }

  return undefined;
};
