import { Maybe } from '../../types';
import { FormatPercentOptionsType } from './types';

// RETURNS: 12.235,53 %

const formatPercent = (
  value: Maybe<number>,
  options?: FormatPercentOptionsType
): string | undefined => {
  if (value) {
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

    return new Intl.NumberFormat(locale, formatOptions).format(value);
  }

  return undefined;
};

export default formatPercent;
