import { GetWeekdaysForLocaleProps } from './interfaces/GetWeekdaysForLocaleProps';

// RETURNS: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
// RETURNS: ['Monday', 'Tuesday', 'Wednesday', 'Thurstday', 'Friday', 'Saturday', 'Sunday']
// RETURNS: ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So']
// RETURNS: ['Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samatsg', 'Sonntag']

export const getWeekdaysForLocale = (
  props: GetWeekdaysForLocaleProps,
): string[] => {
  const { locale = 'en-US', short = false } = props;

  const weekdayFormat = short ? 'short' : 'long';

  const { format } = new Intl.DateTimeFormat(locale, {
    weekday: weekdayFormat,
  });

  return [...Array(7).keys()].map((day) =>
    format(new Date(Date.UTC(2022, 1, day))),
  );
};
