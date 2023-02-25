import { GetWeekdaysForLocaleProps } from './interfaces/GetWeekdaysForLocaleProps';

// RETURNS: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
// RETURNS: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thurstday', 'Friday', 'Saturday']
// RETURNS: ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa']
// RETURNS: ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samatsg']

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
