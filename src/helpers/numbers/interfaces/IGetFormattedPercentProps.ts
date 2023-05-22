import { Maybe } from '~/types/Maybe';
import { FormattedPercentOptionsType } from '../types/FormattedPercentOptionsType';

export interface IGetFormattedPercentProps {
  value: Maybe<number>;
  options?: FormattedPercentOptionsType;
}
