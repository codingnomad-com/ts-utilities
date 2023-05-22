import { Maybe } from '~/types/Maybe';
import { FormattedDateFullOptionsType } from '../types/FormattedDateFullOptionsType';

export interface IGetFormattedDateFullProps {
  timestamp: Maybe<number>;
  options?: FormattedDateFullOptionsType;
}
