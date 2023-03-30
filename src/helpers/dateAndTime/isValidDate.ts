import { IsValidDateProps } from './interfaces/IsValidDateProps';

export const isValidDate = (props: IsValidDateProps): boolean => {
  const { date } = props;

  return (
    (date &&
      Object.prototype.toString.call(date) === '[object Date]' &&
      !Number.isNaN(date?.getTime())) ||
    false
  );
};
