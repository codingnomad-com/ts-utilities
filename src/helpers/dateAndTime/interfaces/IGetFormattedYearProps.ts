import { Maybe } from '~/types/Maybe';
import { FormattedYearOptionsType } from '../types/FormattedYearOptionsType';

export interface IGetFormattedYearProps {
  timestamp: Maybe<number>;
  options?: FormattedYearOptionsType;
}
