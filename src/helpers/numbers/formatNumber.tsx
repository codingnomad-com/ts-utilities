import { Maybe } from '../../types';
import { FormatNumberOptionsType } from './types';

// RETURNS: 12.235,53

const formatNumber = (
  value: Maybe<number>,
  options?: FormatNumberOptionsType
): string | undefined => {
  if (value) {
    const {
      useGrouping = true,
      minimumFractionDigits = 2,
      maximumFractionDigits = 2,
      locale = 'de-DE',
    } = options || {};

    const formatOptions = {
      style: 'decimals',
      useGrouping,
      minimumFractionDigits,
      maximumFractionDigits,
    };

    return new Intl.NumberFormat(locale, formatOptions).format(value);
  }

  return undefined;
};

export default formatNumber;
