import { Maybe } from '../../../types/Maybe';
import { FormattedTimeOptionsType } from '../types/FormattedTimeOptionsType';

export interface GetFormattedTimeProps {
  timestamp: Maybe<number>;
  options?: FormattedTimeOptionsType;
}
