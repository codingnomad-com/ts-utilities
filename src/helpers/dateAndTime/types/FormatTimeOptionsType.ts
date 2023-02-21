import { LocalesType } from '../../../types/LocalesType';
import { HourFormatType } from './HourFormatType';
import { MinuteFormatType } from './MinuteFormatType';
import { SecondFormatType } from './SecondFormatType';

export type FormatTimeOptionsType = {
  hourFormat?: HourFormatType;
  minuteFormat?: MinuteFormatType;
  secondFormat?: SecondFormatType;
  hour12?: boolean;
  locale?: LocalesType;
};
