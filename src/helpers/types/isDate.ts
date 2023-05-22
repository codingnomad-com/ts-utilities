/* eslint-disable @typescript-eslint/no-explicit-any */

export const isDate = (value: any): value is Date => {
  return (
    value &&
    Object.prototype.toString.call(value) === '[object Date]' &&
    !Number.isNaN(value)
  );
};

export default isDate;
