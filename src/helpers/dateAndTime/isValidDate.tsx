// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const isValidDate = (date: any): boolean => {
  return (
    (date &&
      Object.prototype.toString.call(date) === '[object Date]' &&
      !Number.isNaN(date?.getTime())) ||
    false
  );
};
