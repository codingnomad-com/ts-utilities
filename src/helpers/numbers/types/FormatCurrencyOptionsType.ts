import { LocalesType } from '../../../types/LocalesType';
import { CurrencyDisplayType } from './CurrencyDisplayType';
import { CurrencyType } from './CurrencyType';
import { MaximumFractionDigitsType } from './MaximumFractionDigitsType';
import { MinimumFractionDigitsType } from './MinimumFractionDigitsType';

export type FormatCurrencyOptionsType = {
  currencyDisplay?: CurrencyDisplayType;
  currency?: CurrencyType;
  useGrouping?: boolean;
  minimumFractionDigits?: MinimumFractionDigitsType;
  maximumFractionDigits?: MaximumFractionDigitsType;
  locale?: LocalesType;
};
