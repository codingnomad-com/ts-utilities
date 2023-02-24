import { GetFormattedPercentProps } from './interfaces/GetFormattedPercentProps';

// RETURNS: 12.235,53 %

export const getFormattedPercent = (
  props: GetFormattedPercentProps,
): string | undefined => {
  const { value, options } = props;

  if (value) {
    const valueToFormat = value / 100;

    const {
      useGrouping = true,
      minimumFractionDigits = 2,
      maximumFractionDigits = 2,
      locale = 'de-DE',
    } = options || {};

    const formatOptions = {
      style: 'percent',
      useGrouping,
      minimumFractionDigits,
      maximumFractionDigits,
    };

    return new Intl.NumberFormat(locale, formatOptions).format(valueToFormat);
  }

  return undefined;
};
