import { getWeekdaysForLocale } from '../dateAndTime/getWeekdaysForLocale';
import { IGetFormattedOpeningHoursProps } from './interfaces/IGetFormattedOpeningHoursProps';
import { FormattedOpeningHours } from './types/FormattedOpeningHours';
import { FormattedOpeningHoursGroup } from './types/FormattedOpeningHoursGroup';
import { OpeningHoursType } from './types/OpeningHoursType';

// RETURNS: [{ days: 'Mo & Di', times: '09:30 - 20:00 Uhr' }, { days: 'Mi', times: '09:30 - 19:00 Uhr' }, { days: 'Do - Sa', times: '09:30 - 20:00 Uhr' }]
// RETURNS: [{ days: 'Montag & Dienstag', times: '09:30 - 20:00 Uhr' }, { days: 'Mittwoch', times: '09:30 - 19:00 Uhr' }, { days: 'Donnerstag - Samstag', times: '09:30 - 20:00 Uhr' }]
// RETURNS: [{ days: 'Mon & Tue', times: '09:30 - 20:00 Uhr' }, { days: 'Wed', times: '09:30 - 19:00 Uhr' }, { days: 'Thu - Sat', times: '09:30 - 20:00 Uhr' }]
// RETURNS: [{ days: 'Monday & Tuesday', times: '09:30 - 20:00 Uhr' }, { days: 'Wednesday', times: '09:30 - 19:00 Uhr' }, { days: 'Thursday - Saturday', times: '09:30 - 20:00 Uhr' }]

const groupDays = (
  daysGroup: FormattedOpeningHoursGroup[],
  weekdays: string[],
  withSpaces: boolean,
): FormattedOpeningHours[] => {
  const result = [];

  const hoursSeparator = withSpaces ? ' - ' : '-';

  for (let i = 0; i < 7; i++) {
    const days = daysGroup.filter((day) => day.group === i);

    if (days.length) {
      const daysSeparator = days.length === 2 ? ' & ' : hoursSeparator;

      if (days.length === 1) {
        const day = days[0];

        const { dayOfWeek, hours } = day;

        if (hours?.length) {
          result.push({
            days: weekdays[dayOfWeek],
            times: `${hours[0].from}${hoursSeparator}${hours[0].to} Uhr`,
          });
        }
      } else {
        const [firstDay, lastDay] = [days[0], days[days.length - 1]];

        result.push({
          days: `${weekdays[firstDay.dayOfWeek]}${daysSeparator}${
            weekdays[lastDay.dayOfWeek]
          }`,
          times: `${firstDay.hours[0].from}${hoursSeparator}${lastDay.hours[0].to} Uhr`,
        });
      }
    }
  }

  return result;
};

const formatDays = (
  openingHoursDays: OpeningHoursType[],
): FormattedOpeningHoursGroup[] => {
  let group = 0;

  return openingHoursDays.map((openingHours: OpeningHoursType, i: number) => {
    if (!i) return { ...openingHours, group };

    if (!openingHours.hours?.length) {
      group += 1;

      return { ...openingHours, group };
    }

    if (
      openingHours.hours[0].from !== openingHoursDays[i - 1].hours[0].from ||
      openingHours.hours[0].to !== openingHoursDays[i - 1].hours[0].to
    ) {
      group += 1;
    }

    return { ...openingHours, group };
  });
};

export const getFormattedOpeningHours = (
  props: IGetFormattedOpeningHoursProps,
): FormattedOpeningHours[] => {
  const {
    locale = 'en-US',
    openingHours,
    shortWeekdays = false,
    withSpaces = false,
  } = props;

  const weekdays = getWeekdaysForLocale({ locale, short: shortWeekdays });

  const formattedDays = formatDays(openingHours);

  const formattedOpeningHours = groupDays(formattedDays, weekdays, withSpaces);

  return formattedOpeningHours;
};

export default getFormattedOpeningHours;
