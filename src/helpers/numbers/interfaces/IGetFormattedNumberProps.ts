import { Maybe } from '~/types/Maybe';
import { FormattedNumberOptionsType } from '../types/FormattedNumberOptionsType';

export interface IGetFormattedNumberProps {
  value: Maybe<number>;
  options?: FormattedNumberOptionsType;
}
