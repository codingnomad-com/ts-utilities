import { Locale } from '../../../types/Locale';
import { TimeZone } from './TimeZone';
import { YearFormatType } from './YearFormatType';

export type FormattedYearOptionsType = {
  locale?: Locale;
  timeZone?: TimeZone;
  yearFormat?: YearFormatType;
};
