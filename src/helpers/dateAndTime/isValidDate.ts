import { IIsValidDateProps } from './interfaces/IIsValidDateProps';

export const isValidDate = (props: IIsValidDateProps): boolean => {
  const { date } = props;

  return (
    (date &&
      Object.prototype.toString.call(date) === '[object Date]' &&
      !Number.isNaN(date?.getTime())) ||
    false
  );
};

export default isValidDate;
