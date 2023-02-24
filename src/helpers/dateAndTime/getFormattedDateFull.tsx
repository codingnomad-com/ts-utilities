import { Maybe } from '../../types';
import { GetFormattedDateFullProps } from './interfaces/GetFormattedDateFullProps';

// RETURNS: Dienstag, 25. August 2021

export const getFormattedDateFull = (
  props: GetFormattedDateFullProps,
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
    } = options || {};

    const formatOptions = {
      weekday: weekdayFormat,
      day: dayFormat,
      month: monthFormat,
      year: yearFormat,
    };

    return new Intl.DateTimeFormat(locale, formatOptions).format(date);
  }

  return undefined;
};
