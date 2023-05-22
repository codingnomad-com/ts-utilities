import { Maybe } from '~/types/Maybe';
import { IGetFormattedCurrencyProps } from './interfaces/IGetFormattedCurrencyProps';

// RETURNS: 12.235,53 €

export const getFormattedCurrency = (
  props: IGetFormattedCurrencyProps,
): Maybe<string> => {
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

export default getFormattedCurrency;
