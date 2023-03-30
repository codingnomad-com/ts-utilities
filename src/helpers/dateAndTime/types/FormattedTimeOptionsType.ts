import { Locale } from '~/types/Locale';
import { HourFormatType } from './HourFormatType';
import { MinuteFormatType } from './MinuteFormatType';
import { SecondFormatType } from './SecondFormatType';
import { TimeZone } from './TimeZone';

export type FormattedTimeOptionsType = {
  hour12?: boolean;
  hourFormat?: HourFormatType;
  locale?: Locale;
  minuteFormat?: MinuteFormatType;
  secondFormat?: SecondFormatType;
  timeZone?: TimeZone;
};
