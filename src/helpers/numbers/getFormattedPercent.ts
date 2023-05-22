import { Maybe } from '~/types/Maybe';
import { IGetFormattedPercentProps } from './interfaces/IGetFormattedPercentProps';

// RETURNS: 12.235,53 %

export const getFormattedPercent = (
  props: IGetFormattedPercentProps,
): Maybe<string> => {
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

export default getFormattedPercent;
