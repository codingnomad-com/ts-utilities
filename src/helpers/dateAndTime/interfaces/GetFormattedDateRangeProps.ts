import { Maybe } from '../../../types/Maybe';
import { FormattedDateNormalOptionsType } from '../types/FormattedDateNormalOptionsType';

export interface GetFormattedDateRangeProps {
  dateNormalOptions: FormattedDateNormalOptionsType;
  endDate?: Maybe<number>;
  startDate?: Maybe<number>;
  withTime?: boolean;
}
