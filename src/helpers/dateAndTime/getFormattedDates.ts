import { getFormattedDate } from './getFormattedDate';
import { getFormattedDateFull } from './getFormattedDateFull';
import { getFormattedDateLong } from './getFormattedDateLong';
import { IGetFormattedDatesProps } from './interfaces/IGetFormattedDatesProps';
import { FormattedDatesReturnType } from './types/FormattedDatesReturnType';

// RETURNS: { dateNormal, dateLong, dateFull }

export const getFormattedDates = (
  props: IGetFormattedDatesProps,
): FormattedDatesReturnType => {
  const { dateFullOptions, dateLongOptions, dateNormalOptions, timestamp } =
    props;

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
