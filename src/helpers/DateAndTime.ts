import { GetFormattedDatesProps } from '~/dateAndTime/interfaces/GetFormattedDatesProps';
import { GetYYYYMMDDDateProps } from '~/dateAndTime/interfaces/GetYYYYMMDDDateProps';
import { IsValidDateProps } from '~/dateAndTime/interfaces/IsValidDateProps';
import { getFormattedDate } from './dateAndTime/getFormattedDate';
import { getFormattedDateFull } from './dateAndTime/getFormattedDateFull';
import { getFormattedDateLong } from './dateAndTime/getFormattedDateLong';
import { getFormattedDateRange } from './dateAndTime/getFormattedDateRange';
import { getFormattedDates } from './dateAndTime/getFormattedDates';
import { getFormattedTime } from './dateAndTime/getFormattedTime';
import { getFormattedYear } from './dateAndTime/getFormattedYear';
import { getWeekdaysForLocale } from './dateAndTime/getWeekdaysForLocale';
import { getYYYYMMDDDate } from './dateAndTime/getYYYYMMDDDate';
import { GetFormattedDateFullProps } from './dateAndTime/interfaces/GetFormattedDateFullProps';
import { GetFormattedDateLongProps } from './dateAndTime/interfaces/GetFormattedDateLongProps';
import { GetFormattedDateProps } from './dateAndTime/interfaces/GetFormattedDateProps';
import { GetFormattedDateRangeProps } from './dateAndTime/interfaces/GetFormattedDateRangeProps';
import { GetFormattedTimeProps } from './dateAndTime/interfaces/GetFormattedTimeProps';
import { GetFormattedYearProps } from './dateAndTime/interfaces/GetFormattedYearProps';
import { GetWeekdaysForLocaleProps } from './dateAndTime/interfaces/GetWeekdaysForLocaleProps';
import { isValidDate } from './dateAndTime/isValidDate';
import { DateAndTimeInterface } from './interfaces/DateAndTimeInterface';

export const DateAndTime = (): DateAndTimeInterface => ({
  getFormattedDate: (props: GetFormattedDateProps) => getFormattedDate(props),
  getFormattedDateFull: (props: GetFormattedDateFullProps) =>
    getFormattedDateFull(props),
  getFormattedDateLong: (props: GetFormattedDateLongProps) =>
    getFormattedDateLong(props),
  getFormattedDateRange: (props: GetFormattedDateRangeProps) =>
    getFormattedDateRange(props),
  getFormattedDates: (props: GetFormattedDatesProps) =>
    getFormattedDates(props),
  getFormattedTime: (props: GetFormattedTimeProps) => getFormattedTime(props),
  getFormattedYear: (props: GetFormattedYearProps) => getFormattedYear(props),
  getWeekdaysForLocale: (props: GetWeekdaysForLocaleProps) =>
    getWeekdaysForLocale(props),
  getYYYYMMDDDate: (props: GetYYYYMMDDDateProps) => getYYYYMMDDDate(props),
  isValidDate: (props: IsValidDateProps) => isValidDate(props),
});
