import { Maybe } from '~/types/Maybe';
import { FormattedDateLongOptionsType } from '../types/FormattedDateLongOptionsType';

export interface GetFormattedDateLongProps {
  timestamp: Maybe<number>;
  options?: FormattedDateLongOptionsType;
}
