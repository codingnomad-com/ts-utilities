// RETURNS: true // isBoolean(false)

export const isBoolean = (value: unknown): value is boolean => {
  return typeof value === 'boolean';
};

export default isBoolean;
