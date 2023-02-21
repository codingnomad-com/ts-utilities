import { Maybe } from '../../../types/Maybe';
import { FormattedPercentOptionsType } from '../types/FormattedPercentOptionsType';

export interface GetFormattedPercentProps {
  value: Maybe<number>;
  options?: FormattedPercentOptionsType;
}
