// RETURNS: true // isSet(new Set())

export const isSet = (value: unknown): value is Set<unknown> => {
  return value instanceof Set;
};

export default isSet;
