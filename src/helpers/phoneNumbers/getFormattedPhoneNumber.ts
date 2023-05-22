import { getDialCode } from './getDialCode';
import { IGetFormattedPhoneNumberProps } from './interfaces/IGetFormattedPhoneNumberProps';

// RETURNS: +49 711 123456
// RETURNS: +49 (0) 711 123456

export const getFormattedPhoneNumber = (
  props: IGetFormattedPhoneNumberProps,
): string => {
  const { areaCode, countryCode, number, showZero = false } = props;

  const dialCode = getDialCode({ isoCode: countryCode });

  const zero = showZero ? '(0) ' : '';

  const formattedAreaCode = parseInt(areaCode, 10).toString();

  return `${dialCode} ${zero}${formattedAreaCode} ${number}`;
};

export default getFormattedPhoneNumber;
