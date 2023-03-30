import { Maybe } from '~/types/Maybe';
import { GetFormattedDateProps } from './interfaces/GetFormattedDateProps';

// RETURNS: 24.08.2021

export const getFormattedDate = (
  props: GetFormattedDateProps,
): Maybe<string> => {
  const { timestamp, options } = props;

  if (timestamp) {
    const date = new Date(timestamp);

    const {
      dayFormat,
      monthFormat = '2-digit',
      yearFormat = 'numeric',
      locale = 'de-DE',
      timeZone,
    } = options || {};

    const formatOptions = {
      day: dayFormat,
      month: monthFormat,
      year: yearFormat,
      timeZone,
    };

    return new Intl.DateTimeFormat(locale, formatOptions).format(date);
  }

  return undefined;
};
