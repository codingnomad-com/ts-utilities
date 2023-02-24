import { GetFormattedNumberProps } from './interfaces/GetFormattedNumberProps';

// RETURNS: 12.235,53

export const getFormattedNumber = (
  props: GetFormattedNumberProps,
): string | undefined => {
  const { value, options } = props;

  if (value) {
    const {
      useGrouping = true,
      minimumFractionDigits = 2,
      maximumFractionDigits = 2,
      locale = 'de-DE',
    } = options || {};

    const formatOptions = {
      useGrouping,
      minimumFractionDigits,
      maximumFractionDigits,
    };

    return new Intl.NumberFormat(locale, formatOptions).format(value);
  }

  return undefined;
};
