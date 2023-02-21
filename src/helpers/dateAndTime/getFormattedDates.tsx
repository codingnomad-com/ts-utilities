import { Maybe } from '../../types';
import getFormattedDate from './getFormattedDate';
import getFormattedDateFull from './getFormattedDateFull';
import getFormattedDateLong from './getFormattedDateLong';

import {
  FormattedDateFullOptionsType,
  FormattedDateLongOptionsType,
  FormattedDateNormalOptionsType,
  FormattedDatesReturnType,
} from './types';

// RETURNS: { dateNormal, dateLong, dateFull }

const getFormattedDates = (
  timestamp: Maybe<number>,
  dateNormalOptions: FormattedDateNormalOptionsType,
  dateLongOptions: FormattedDateLongOptionsType,
  dateFullOptions: FormattedDateFullOptionsType,
): FormattedDatesReturnType => {
  if (timestamp) {
    const dateNormal = getFormattedDate({
      timestamp,
      options: dateNormalOptions,
    });

    const dateLong = getFormattedDateLong({
      timestamp,
      options: dateLongOptions,
    });

    const dateFull = getFormattedDateFull({
      timestamp,
      options: dateFullOptions,
    });

    return { dateNormal, dateLong, dateFull };
  }

  return { dateNormal: undefined, dateLong: undefined, dateFull: undefined };
};

export default getFormattedDates;
