import { Maybe } from '../../types';
import { FormatYearOptionsType } from './types';

// RETURNS: 2021

const formatYear = (
  timestamp: Maybe<number>,
  options?: FormatYearOptionsType
): string | undefined => {
  if (timestamp) {
    const date = new Date(timestamp);

    const { yearFormat = 'numeric', locale = 'de-DE' } = options || {};

    const formatOptions = {
      year: yearFormat,
    };

    return new Intl.DateTimeFormat(locale, formatOptions).format(date);
  }

  return undefined;
};

export default formatYear;
