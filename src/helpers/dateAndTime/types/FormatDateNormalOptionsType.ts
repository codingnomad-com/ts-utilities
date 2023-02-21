import { LocalesType } from '../../../types/LocalesType';
import { DayFormatType } from './DayFormatType';
import { MonthFormatType } from './MonthFormatType';
import { YearFormatType } from './YearFormatType';

export type FormatDateNormalOptionsType = {
  dayFormat?: DayFormatType;
  monthFormat?: MonthFormatType;
  yearFormat?: YearFormatType;
  locale?: LocalesType;
};
