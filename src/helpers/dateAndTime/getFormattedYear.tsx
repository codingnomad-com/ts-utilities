import { GetFormattedYearProps } from './interfaces/GetFormattedYearProps';

// RETURNS: 2021

export const getFormattedYear = (
  props: GetFormattedYearProps,
): string | undefined => {
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
