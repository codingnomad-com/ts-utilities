import { Maybe } from '~/types/Maybe';
import { FormattedDateNormalOptionsType } from '../types/FormattedDateNormalOptionsType';

export interface IGetFormattedDateRangeProps {
  dateNormalOptions: FormattedDateNormalOptionsType;
  endDate?: Maybe<number>;
  startDate?: Maybe<number>;
  withTime?: boolean;
}
