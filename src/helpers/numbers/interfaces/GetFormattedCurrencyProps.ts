import { Maybe } from '~/types/Maybe';
import { FormattedCurrencyOptionsType } from '../types/FormattedCurrencyOptionsType';

export interface GetFormattedCurrencyProps {
  value: Maybe<number>;
  options?: FormattedCurrencyOptionsType;
}
