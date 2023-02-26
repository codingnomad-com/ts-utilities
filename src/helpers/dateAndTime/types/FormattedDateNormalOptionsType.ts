import { Locale } from '../../../types/Locale';
import { DayFormatType } from './DayFormatType';
import { MonthFormatType } from './MonthFormatType';
import { TimeZone } from './TimeZone';
import { YearFormatType } from './YearFormatType';

export type FormattedDateNormalOptionsType = {
  dayFormat?: DayFormatType;
  locale?: Locale;
  monthFormat?: MonthFormatType;
  timeZone?: TimeZone;
  yearFormat?: YearFormatType;
};
