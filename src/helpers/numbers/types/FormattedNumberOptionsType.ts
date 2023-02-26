import { Locale } from '../../../types/Locale';
import { MaximumFractionDigitsType } from './MaximumFractionDigitsType';
import { MinimumFractionDigitsType } from './MinimumFractionDigitsType';

export type FormattedNumberOptionsType = {
  useGrouping?: boolean;
  minimumFractionDigits?: MinimumFractionDigitsType;
  maximumFractionDigits?: MaximumFractionDigitsType;
  locale?: Locale;
};
