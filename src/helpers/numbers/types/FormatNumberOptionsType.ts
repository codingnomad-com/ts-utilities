import { LocalesType } from '../../../types/LocalesType';
import { MaximumFractionDigitsType } from './MaximumFractionDigitsType';
import { MinimumFractionDigitsType } from './MinimumFractionDigitsType';

export type FormatNumberOptionsType = {
  useGrouping?: boolean;
  minimumFractionDigits?: MinimumFractionDigitsType;
  maximumFractionDigits?: MaximumFractionDigitsType;
  locale?: LocalesType;
};
