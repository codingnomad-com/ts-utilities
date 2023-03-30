import { GetFormattedDateFullProps } from '~/dateAndTime/interfaces/GetFormattedDateFullProps';
import { GetFormattedDateLongProps } from '~/dateAndTime/interfaces/GetFormattedDateLongProps';
import { GetFormattedDateProps } from '~/dateAndTime/interfaces/GetFormattedDateProps';
import { GetFormattedDateRangeProps } from '~/dateAndTime/interfaces/GetFormattedDateRangeProps';
import { GetFormattedDatesProps } from '~/dateAndTime/interfaces/GetFormattedDatesProps';
import { GetFormattedTimeProps } from '~/dateAndTime/interfaces/GetFormattedTimeProps';
import { GetFormattedYearProps } from '~/dateAndTime/interfaces/GetFormattedYearProps';
import { GetWeekdaysForLocaleProps } from '~/dateAndTime/interfaces/GetWeekdaysForLocaleProps';
import { GetYYYYMMDDDateProps } from '~/dateAndTime/interfaces/GetYYYYMMDDDateProps';
import { IsValidDateProps } from '~/dateAndTime/interfaces/IsValidDateProps';
import { Maybe } from '~/types/Maybe';

export interface DateAndTimeInterface {
  getFormattedDate: (props: GetFormattedDateProps) => Maybe<string>;
  getFormattedDateFull: (props: GetFormattedDateFullProps) => Maybe<string>;
  getFormattedDateLong: (props: GetFormattedDateLongProps) => Maybe<string>;
  getFormattedDateRange: (props: GetFormattedDateRangeProps) => Maybe<string>;
  getFormattedDates: (props: GetFormattedDatesProps) => {
    dateNormal: Maybe<string>;
    dateLong: Maybe<string>;
    dateFull: Maybe<string>;
  };
  getFormattedTime: (props: GetFormattedTimeProps) => Maybe<string>;
  getFormattedYear: (props: GetFormattedYearProps) => Maybe<string>;
  getWeekdaysForLocale: (props: GetWeekdaysForLocaleProps) => string[];
  getYYYYMMDDDate: (props: GetYYYYMMDDDateProps) => Maybe<string>;
  isValidDate: (props: IsValidDateProps) => boolean;
}
