import { Maybe } from '~/types/Maybe';
import { FormattedDateFullOptionsType } from '../types/FormattedDateFullOptionsType';
import { FormattedDateLongOptionsType } from '../types/FormattedDateLongOptionsType';
import { FormattedDateNormalOptionsType } from '../types/FormattedDateNormalOptionsType';

export interface GetFormattedDatesProps {
  dateFullOptions: FormattedDateFullOptionsType;
  dateLongOptions: FormattedDateLongOptionsType;
  dateNormalOptions: FormattedDateNormalOptionsType;
  timestamp: Maybe<number>;
}
