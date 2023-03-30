import { Maybe } from '~/types/Maybe';
import { FormattedNumberOptionsType } from '../types/FormattedNumberOptionsType';

export interface GetFormattedNumberProps {
  value: Maybe<number>;
  options?: FormattedNumberOptionsType;
}
