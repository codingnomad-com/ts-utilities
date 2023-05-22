import { Maybe } from '~/types/Maybe';
import { IGetFormattedYearProps } from './interfaces/IGetFormattedYearProps';

// RETURNS: 2021

export const getFormattedYear = (
  props: IGetFormattedYearProps,
): Maybe<string> => {
  const { timestamp, options } = props;

  if (timestamp) {
    const date = new Date(timestamp);

    const {
      yearFormat = 'numeric',
      locale = 'de-DE',
      timeZone,
    } = options || {};

    const formatOptions = {
      year: yearFormat,
      timeZone,
    };

    return new Intl.DateTimeFormat(locale, formatOptions).format(date);
  }

  return undefined;
};

export default getFormattedYear;
