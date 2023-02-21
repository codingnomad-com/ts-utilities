import { Maybe } from '../../types';
import formatDate from './formatDate';
import formatDateFull from './formatDateFull';
import formatDateLong from './formatDateLong';
import {
  FormatDatesReturnType,
  FormatDateLongOptionsType,
  FormatDateFullOptionsType,
  FormatDateNormalOptionsType,
} from './types';

// RETURNS: { dateNormal, dateLong, dateFull }

const formatDates = (
  timestamp: Maybe<number>,
  dateNormalOptions: FormatDateNormalOptionsType,
  dateLongOptions: FormatDateLongOptionsType,
  dateFullOptions: FormatDateFullOptionsType
): FormatDatesReturnType => {
  if (timestamp) {
    const dateNormal = formatDate(timestamp, dateNormalOptions);

    const dateLong = formatDateLong(timestamp, dateLongOptions);

    const dateFull = formatDateFull(timestamp, dateFullOptions);

    return { dateNormal, dateLong, dateFull };
  }

  return { dateNormal: undefined, dateLong: undefined, dateFull: undefined };
};

export default formatDates;
