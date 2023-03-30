import { Locale } from '~/types/Locale';
import { DayFormatType } from './DayFormatType';
import { MonthFormatType } from './MonthFormatType';
import { TimeZone } from './TimeZone';
import { WeekdayFormatType } from './WeekdayFormatType';
import { YearFormatType } from './YearFormatType';

export type FormattedDateFullOptionsType = {
  dayFormat?: DayFormatType;
  locale?: Locale;
  monthFormat?: MonthFormatType;
  timeZone?: TimeZone;
  weekdayFormat?: WeekdayFormatType;
  yearFormat?: YearFormatType;
};
