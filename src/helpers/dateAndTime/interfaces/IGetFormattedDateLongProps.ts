import { Maybe } from '~/types/Maybe';
import { FormattedDateLongOptionsType } from '../types/FormattedDateLongOptionsType';

export interface IGetFormattedDateLongProps {
  timestamp: Maybe<number>;
  options?: FormattedDateLongOptionsType;
}
