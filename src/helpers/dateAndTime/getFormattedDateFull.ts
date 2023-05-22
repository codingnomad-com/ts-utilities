import { Maybe } from '~/types/Maybe';
import { IGetFormattedDateFullProps } from './interfaces/IGetFormattedDateFullProps';

// RETURNS: Dienstag, 25. August 2021

export const getFormattedDateFull = (
  props: IGetFormattedDateFullProps,
): Maybe<string> => {
  const { timestamp, options } = props;

  if (timestamp) {
    const date = new Date(timestamp);

    const {
      weekdayFormat = 'long',
      dayFormat = 'numeric',
      monthFormat = 'long',
      yearFormat = 'numeric',
      locale = 'de-DE',
      timeZone,
    } = options || {};

    const formatOptions = {
      weekday: weekdayFormat,
      day: dayFormat,
      month: monthFormat,
      year: yearFormat,
      timeZone,
    };

    return new Intl.DateTimeFormat(locale, formatOptions).format(date);
  }

  return undefined;
};

export default getFormattedDateFull;
