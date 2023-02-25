import { getDialCode } from './getDialCode';
import { GetFormattedPhoneNumberProps } from './interfaces/GetFormattedPhoneNumberProps';

// RETURNS: +49 711 123456
// RETURNS: +49 (0) 711 123456

export const getFormattedPhoneNumber = (
  props: GetFormattedPhoneNumberProps,
): string => {
  const { areaCode, countryCode, number, showZero = false } = props;

  const dialCode = getDialCode(countryCode);

  const zero = showZero ? '(0) ' : '';

  const formattedAreaCode = parseInt(areaCode, 10).toString();

  return `${dialCode} ${zero}${formattedAreaCode} ${number}`;
};
