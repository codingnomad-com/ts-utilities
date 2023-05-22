import { getFormattedDate } from '~/dateAndTime/getFormattedDate';
import { getFormattedDateFull } from '~/dateAndTime/getFormattedDateFull';
import { getFormattedDateLong } from '~/dateAndTime/getFormattedDateLong';
import { getFormattedDateRange } from '~/dateAndTime/getFormattedDateRange';
import { getFormattedDates } from '~/dateAndTime/getFormattedDates';
import { getFormattedTime } from '~/dateAndTime/getFormattedTime';
import { getFormattedYear } from '~/dateAndTime/getFormattedYear';
import { getWeekdaysForLocale } from '~/dateAndTime/getWeekdaysForLocale';
import { getYYYYMMDDDate } from '~/dateAndTime/getYYYYMMDDDate';
import { IGetFormattedDateFullProps } from '~/dateAndTime/interfaces/IGetFormattedDateFullProps';
import { IGetFormattedDateLongProps } from '~/dateAndTime/interfaces/IGetFormattedDateLongProps';
import { IGetFormattedDateProps } from '~/dateAndTime/interfaces/IGetFormattedDateProps';
import { IGetFormattedDateRangeProps } from '~/dateAndTime/interfaces/IGetFormattedDateRangeProps';
import { IGetFormattedDatesProps } from '~/dateAndTime/interfaces/IGetFormattedDatesProps';
import { IGetFormattedTimeProps } from '~/dateAndTime/interfaces/IGetFormattedTimeProps';
import { IGetFormattedYearProps } from '~/dateAndTime/interfaces/IGetFormattedYearProps';
import { IGetWeekdaysForLocaleProps } from '~/dateAndTime/interfaces/IGetWeekdaysForLocaleProps';
import { IGetYYYYMMDDDateProps } from '~/dateAndTime/interfaces/IGetYYYYMMDDDateProps';
import { IIsValidDateProps } from '~/dateAndTime/interfaces/IIsValidDateProps';
import { isValidDate } from '~/dateAndTime/isValidDate';
import { IDateAndTime } from './interfaces/IDateAndTime';

export const DateAndTime = (): IDateAndTime => ({
  getFormattedDate: (props: IGetFormattedDateProps) => getFormattedDate(props),
  getFormattedDateFull: (props: IGetFormattedDateFullProps) =>
    getFormattedDateFull(props),
  getFormattedDateLong: (props: IGetFormattedDateLongProps) =>
    getFormattedDateLong(props),
  getFormattedDateRange: (props: IGetFormattedDateRangeProps) =>
    getFormattedDateRange(props),
  getFormattedDates: (props: IGetFormattedDatesProps) =>
    getFormattedDates(props),
  getFormattedTime: (props: IGetFormattedTimeProps) => getFormattedTime(props),
  getFormattedYear: (props: IGetFormattedYearProps) => getFormattedYear(props),
  getWeekdaysForLocale: (props: IGetWeekdaysForLocaleProps) =>
    getWeekdaysForLocale(props),
  getYYYYMMDDDate: (props: IGetYYYYMMDDDateProps) => getYYYYMMDDDate(props),
  isValidDate: (props: IIsValidDateProps) => isValidDate(props),
});
