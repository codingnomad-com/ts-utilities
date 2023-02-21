import { Maybe } from '../../types';
import formatDate from './formatDate';
import formatTime from './formatTime';
import { FormatDateNormalOptionsType, FormatTimeOptionsType } from './types';

// RETURNS: 01.01.2022 (startDate)
// RETURNS: 01.01.2022, 15:00 (startDate)
// RETURNS: 01.01.2022, 15:00 - 19:30
// RETURNS: 01.01.2022 - 14.01.2022

const formatDateRange = (
  dateNormalOptions: FormatDateNormalOptionsType,
  startDate: Maybe<number>,
  endDate: Maybe<number>,
  withTime?: boolean
): string | undefined => {
  if (startDate) {
    let formattedStartTime;
    let formattedEndTime;

    const formatTimeOptions: FormatTimeOptionsType = {
      secondFormat: undefined,
    };

    const formattedStartDate = formatDate(startDate, dateNormalOptions);

    if (withTime) {
      formattedStartTime = formatTime(startDate, formatTimeOptions);
    }

    // DateRange with only startDate
    if (!endDate) {
      return formattedStartTime
        ? `${formattedStartDate}, ${formattedStartTime}`
        : formattedStartDate;
    }

    const formattedEndDate = formatDate(endDate, dateNormalOptions);

    if (withTime) {
      formattedEndTime = formatTime(endDate, formatTimeOptions);
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

export default formatDateRange;
