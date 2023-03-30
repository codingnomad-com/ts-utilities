import { Maybe } from '~/types/Maybe';
import { FormattedDateNormalOptionsType } from '../types/FormattedDateNormalOptionsType';

export interface GetFormattedDateProps {
  timestamp: Maybe<number>;
  options?: FormattedDateNormalOptionsType;
}
