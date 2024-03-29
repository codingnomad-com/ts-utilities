// RETURNS: true // isUndefined(undefined)

export const isUndefined = (value: unknown): value is undefined => {
  return value === undefined;
};

export default isUndefined;
