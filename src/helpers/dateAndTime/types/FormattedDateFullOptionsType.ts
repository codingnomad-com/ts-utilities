import { LocalesType } from '../../../types/LocalesType';
import { DayFormatType } from './DayFormatType';
import { MonthFormatType } from './MonthFormatType';
import { WeekdayFormatType } from './WeekdayFormatType';
import { YearFormatType } from './YearFormatType';

export type FormattedDateFullOptionsType = {
  weekdayFormat?: WeekdayFormatType;
  dayFormat?: DayFormatType;
  monthFormat?: MonthFormatType;
  yearFormat?: YearFormatType;
  locale?: LocalesType;
};
