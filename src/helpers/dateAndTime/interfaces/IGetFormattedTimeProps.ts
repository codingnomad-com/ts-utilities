import { Maybe } from '~/types/Maybe';
import { FormattedTimeOptionsType } from '../types/FormattedTimeOptionsType';

export interface IGetFormattedTimeProps {
  timestamp: Maybe<number>;
  options?: FormattedTimeOptionsType;
}
