import { GetFormattedCurrencyProps } from './interfaces/GetFormattedCurrencyProps';

// RETURNS: 12.235,53 €

export const getFormattedCurrency = (
  props: GetFormattedCurrencyProps,
): string | undefined => {
  const { value, options } = props;

  const valueToFormat = value || 0;

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

  return new Intl.NumberFormat(locale, formatOptions).format(valueToFormat);
};
