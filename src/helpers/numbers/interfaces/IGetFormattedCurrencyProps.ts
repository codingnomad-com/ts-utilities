import { Maybe } from '~/types/Maybe';
import { FormattedCurrencyOptionsType } from '../types/FormattedCurrencyOptionsType';

export interface IGetFormattedCurrencyProps {
  value: Maybe<number>;
  options?: FormattedCurrencyOptionsType;
}
