import { Maybe } from '../../../types/Maybe';
import { FormattedDateFullOptionsType } from '../types/FormattedDateFullOptionsType';

export interface GetFormattedDateFullProps {
  timestamp: Maybe<number>;
  options?: FormattedDateFullOptionsType;
}
