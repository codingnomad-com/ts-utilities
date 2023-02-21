import { Maybe } from '../../types';
import { FormatTimeOptionsType } from './types';

// RETURNS: 14:15

const formatTime = (
  timestamp: Maybe<number>,
  options?: FormatTimeOptionsType
): string | undefined => {
  if (timestamp) {
    const date = new Date(timestamp);

    const {
      hourFormat = '2-digit',
      minuteFormat = '2-digit',
      secondFormat,
      hour12 = false,
      locale = 'de-DE',
    } = options || {};

    const formatOptions = {
      hour: hourFormat,
      minute: minuteFormat,
      second: secondFormat,
      hour12,
    };

    return new Intl.DateTimeFormat(locale, formatOptions).format(date);
  }

  return undefined;
};

export default formatTime;
