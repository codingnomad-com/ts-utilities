import { Countries } from '~/data/countries/Countries';
import { CountryType } from '~/data/countries/types/CountryType';
import { Maybe } from '~/types/Maybe';
import { IGetDialCodeProps } from './interfaces/IGetDialCodeProps';

// RETURNS: +49

export const getDialCode = (props: IGetDialCodeProps): Maybe<string> => {
  const { isoCode } = props;

  const selectedCountry = Countries.find(
    (country: CountryType) => country.isoCode === isoCode,
  );

  if (selectedCountry) {
    return selectedCountry.dialCode;
  }

  return undefined;
};

export default getDialCode;
