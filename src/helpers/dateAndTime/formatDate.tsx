import { Maybe } from '../../types';
import { FormatDateNormalOptionsType } from './types';

// RETURNS: 24.08.2021

const formatDate = (
  timestamp: Maybe<number>,
  options?: FormatDateNormalOptionsType
): Maybe<string> => {
  if (timestamp) {
    const date = new Date(timestamp);

    const {
      dayFormat,
      monthFormat = '2-digit',
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

export default formatDate;
