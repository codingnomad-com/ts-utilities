import { Maybe } from '~/types/Maybe';
import { getFormattedDate } from './getFormattedDate';
import { getFormattedTime } from './getFormattedTime';
import { IGetFormattedDateRangeProps } from './interfaces/IGetFormattedDateRangeProps';
import { FormattedTimeOptionsType } from './types/FormattedTimeOptionsType';

// RETURNS: 01.01.2022 (startDate)
// RETURNS: 01.01.2022, 15:00 (startDate)
// RETURNS: 01.01.2022, 15:00 - 19:30
// RETURNS: 01.01.2022 - 14.01.2022

export const getFormattedDateRange = (
  props: IGetFormattedDateRangeProps,
): Maybe<string> => {
  const { dateNormalOptions, endDate, startDate, withTime } = props;
  const { timeZone } = dateNormalOptions;

  if (startDate) {
    let formattedStartTime;
    let formattedEndTime;

    const formattedTimeOptions: FormattedTimeOptionsType = {
      secondFormat: undefined,
      timeZone,
    };

    const formattedStartDate = getFormattedDate({
      timestamp: startDate,
      options: dateNormalOptions,
    });

    if (withTime) {
      formattedStartTime = getFormattedTime({
        timestamp: startDate,
        options: formattedTimeOptions,
      });
    }

    // DateRange with only startDate
    if (!endDate) {
      return formattedStartTime
        ? `${formattedStartDate}, ${formattedStartTime}`
        : formattedStartDate;
    }

    const formattedEndDate = getFormattedDate({
      timestamp: endDate,
      options: dateNormalOptions,
    });

    if (withTime) {
      formattedEndTime = getFormattedTime({
        timestamp: endDate,
        options: formattedTimeOptions,
      });
    }

    // DateRange on a single day
    if (formattedStartDate === formattedEndDate) {
      return `${formattedStartDate}, ${formattedStartTime} - ${formattedEndTime}`;
    }

    // DateRange over multiple days
    return `${formattedStartDate} - ${formattedEndDate}`;
  }

  return undefined;
};

export default getFormattedDateRange;
