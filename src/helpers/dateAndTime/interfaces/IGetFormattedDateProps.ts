import { Maybe } from '~/types/Maybe';
import { FormattedDateNormalOptionsType } from '../types/FormattedDateNormalOptionsType';

export interface IGetFormattedDateProps {
  timestamp: Maybe<number>;
  options?: FormattedDateNormalOptionsType;
}
