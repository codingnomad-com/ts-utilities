import { Maybe } from '../../types';
import { FormatDateLongOptionsType } from './types';

// RETURNS: 25. August 2021

const formatDateLong = (
  timestamp: Maybe<number>,
  options?: FormatDateLongOptionsType
): Maybe<string> => {
  if (timestamp) {
    const date = new Date(timestamp);

    const {
      dayFormat = 'numeric',
      monthFormat = 'long',
      yearFormat = 'numeric',
      locale = 'de-DE',
    } = options || {};

    const formatOptions = {
      day: dayFormat,
      month: monthFormat,
      year: yearFormat,
    };

    return new Intl.DateTimeFormat(locale, formatOptions).format(date);
  }

  return undefined;
};

export default formatDateLong;
