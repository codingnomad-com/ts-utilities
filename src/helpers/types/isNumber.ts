// RETURNS: true // isNumber(1324)

export const isNumber = (value: unknown): value is number => {
  return typeof value === 'number' && !Number.isNaN(value);
};

export default isNumber;
