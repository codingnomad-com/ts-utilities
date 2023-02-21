// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isValidDate = (date: any): boolean => {
  return (
    (date &&
      Object.prototype.toString.call(date) === '[object Date]' &&
      !Number.isNaN(date?.getTime())) ||
    false
  );
};

export default isValidDate;
