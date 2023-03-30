import { Locale } from '~/types/Locale';
import { CurrencyDisplayType } from './CurrencyDisplayType';
import { CurrencyType } from './CurrencyType';
import { MaximumFractionDigitsType } from './MaximumFractionDigitsType';
import { MinimumFractionDigitsType } from './MinimumFractionDigitsType';

export type FormattedCurrencyOptionsType = {
  currencyDisplay?: CurrencyDisplayType;
  currency?: CurrencyType;
  useGrouping?: boolean;
  minimumFractionDigits?: MinimumFractionDigitsType;
  maximumFractionDigits?: MaximumFractionDigitsType;
  locale?: Locale;
};
