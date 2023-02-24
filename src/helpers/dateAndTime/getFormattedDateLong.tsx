import { Maybe } from '../../types';
import { GetFormattedDateLongProps } from './interfaces/GetFormattedDateLongProps';

// RETURNS: 25. August 2021

export const getFormattedDateLong = (
  props: GetFormattedDateLongProps,
): Maybe<string> => {
  const { timestamp, options } = props;
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
