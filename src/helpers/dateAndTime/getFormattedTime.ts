import { Maybe } from '~/types/Maybe';
import { IGetFormattedTimeProps } from './interfaces/IGetFormattedTimeProps';

// RETURNS: 14:15

export const getFormattedTime = (
  props: IGetFormattedTimeProps,
): Maybe<string> => {
  const { timestamp, options } = props;

  if (timestamp) {
    const date = new Date(timestamp);

    const {
      hourFormat = '2-digit',
      minuteFormat = '2-digit',
      secondFormat,
      hour12 = false,
      locale = 'de-DE',
      timeZone,
    } = options || {};

    const formatOptions = {
      hour: hourFormat,
      minute: minuteFormat,
      second: secondFormat,
      hour12,
      timeZone,
    };

    return new Intl.DateTimeFormat(locale, formatOptions).format(date);
  }

  return undefined;
};

export default getFormattedTime;
