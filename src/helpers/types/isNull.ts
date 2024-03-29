// RETURNS: true // isNull(null)

export const isNull = (value: unknown): value is null => {
  return value === null;
};

export default isNull;
