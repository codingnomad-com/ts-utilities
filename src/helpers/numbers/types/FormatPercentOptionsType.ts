import { LocalesType } from '../../../types/LocalesType';
import { MaximumFractionDigitsType } from './MaximumFractionDigitsType';
import { MinimumFractionDigitsType } from './MinimumFractionDigitsType';

export type FormatPercentOptionsType = {
  useGrouping?: boolean;
  minimumFractionDigits?: MinimumFractionDigitsType;
  maximumFractionDigits?: MaximumFractionDigitsType;
  locale?: LocalesType;
};
