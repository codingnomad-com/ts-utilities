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
import { Maybe } from '~/types/Maybe';

export interface IDateAndTime {
  getFormattedDate: (props: IGetFormattedDateProps) => Maybe<string>;
  getFormattedDateFull: (props: IGetFormattedDateFullProps) => Maybe<string>;
  getFormattedDateLong: (props: IGetFormattedDateLongProps) => Maybe<string>;
  getFormattedDateRange: (props: IGetFormattedDateRangeProps) => Maybe<string>;
  getFormattedDates: (props: IGetFormattedDatesProps) => {
    dateNormal: Maybe<string>;
    dateLong: Maybe<string>;
    dateFull: Maybe<string>;
  };
  getFormattedTime: (props: IGetFormattedTimeProps) => Maybe<string>;
  getFormattedYear: (props: IGetFormattedYearProps) => Maybe<string>;
  getWeekdaysForLocale: (props: IGetWeekdaysForLocaleProps) => string[];
  getYYYYMMDDDate: (props: IGetYYYYMMDDDateProps) => Maybe<string>;
  isValidDate: (props: IIsValidDateProps) => boolean;
}
