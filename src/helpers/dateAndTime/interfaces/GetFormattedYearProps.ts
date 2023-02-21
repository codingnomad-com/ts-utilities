import { Maybe } from '../../../types/Maybe';
import { FormattedYearOptionsType } from '../types/FormattedYearOptionsType';

export interface GetFormattedYearProps {
  timestamp: Maybe<number>;
  options?: FormattedYearOptionsType;
}
