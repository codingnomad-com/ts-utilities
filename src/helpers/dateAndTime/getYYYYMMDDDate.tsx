import { isValidDate } from '../..';

// RETURNS: 20210913

const getYYYYMMDDDate = (date: Date): string | undefined => {
  if (!isValidDate(date)) return undefined;

  const offset = date.getTimezoneOffset();

  date = new Date(date.getTime() - offset * 60 * 1000);

  return date.toISOString().split('T')[0];
};

export default getYYYYMMDDDate;
