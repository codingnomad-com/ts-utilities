import isValidDate from './isValidDate';

// RETURNS: 20210913

const getYYYYMMDDDate = (date: Date): string | undefined => {
  if (!isValidDate(date)) return undefined;

  const offset = date.getTimezoneOffset();

  const formattedDate = new Date(date.getTime() - offset * 60 * 1000);

  return formattedDate.toISOString().split('T')[0];
};

export default getYYYYMMDDDate;
