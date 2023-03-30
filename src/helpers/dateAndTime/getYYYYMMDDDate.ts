import { Maybe } from '~/types/Maybe';
import { GetYYYYMMDDDateProps } from './interfaces/GetYYYYMMDDDateProps';
import { isValidDate } from './isValidDate';

// RETURNS: 20210913

export const getYYYYMMDDDate = (props: GetYYYYMMDDDateProps): Maybe<string> => {
  const { date } = props;

  if (!isValidDate({ date })) {
    return undefined;
  }

  const offset = date.getTimezoneOffset();

  const formattedDate = new Date(date.getTime() - offset * 60 * 1000);

  return formattedDate.toISOString().split('T')[0];
};
