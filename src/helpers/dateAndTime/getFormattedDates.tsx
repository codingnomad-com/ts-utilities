import { Maybe } from '../../types';
import { getFormattedDate } from './getFormattedDate';
import { getFormattedDateFull } from './getFormattedDateFull';
import { getFormattedDateLong } from './getFormattedDateLong';
import { FormattedDateFullOptionsType } from './types/FormattedDateFullOptionsType';
import { FormattedDateLongOptionsType } from './types/FormattedDateLongOptionsType';
import { FormattedDateNormalOptionsType } from './types/FormattedDateNormalOptionsType';
import { FormattedDatesReturnType } from './types/FormattedDatesReturnType';

// RETURNS: { dateNormal, dateLong, dateFull }

export const getFormattedDates = (
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
