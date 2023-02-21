import { Maybe } from '../../types';
import { FormatDateFullOptionsType } from './types';

// RETURNS: Dienstag, 25. August 2021

const formatDateFull = (
  timestamp: Maybe<number>,
  options?: FormatDateFullOptionsType
): Maybe<string> => {
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

export default formatDateFull;
