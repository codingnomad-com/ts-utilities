import { Maybe } from '~/types/Maybe';
import { IGetFormattedDateLongProps } from './interfaces/IGetFormattedDateLongProps';

// RETURNS: 25. August 2021

export const getFormattedDateLong = (
  props: IGetFormattedDateLongProps,
): Maybe<string> => {
  const { timestamp, options } = props;
  if (timestamp) {
    const date = new Date(timestamp);

    const {
      dayFormat = 'numeric',
      monthFormat = 'long',
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

export default getFormattedDateLong;
