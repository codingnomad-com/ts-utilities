import { Maybe } from '../../types';
import { FormatCurrencyOptionsType } from './types';

// RETURNS: 12.235,53 €

const formatCurrency = (
  value: Maybe<number>,
  options?: FormatCurrencyOptionsType
): string | undefined => {
  if (!value) {
    value = 0;
  }

  const {
    currencyDisplay = 'symbol',
    currency = 'EUR',
    useGrouping = true,
    minimumFractionDigits = 2,
    maximumFractionDigits = 2,
    locale = 'de-DE',
  } = options || {};

  const formatOptions = {
    style: 'currency',
    currency,
    currencyDisplay,
    useGrouping,
    minimumFractionDigits,
    maximumFractionDigits,
  };

  return new Intl.NumberFormat(locale, formatOptions).format(value);
};

export default formatCurrency;
