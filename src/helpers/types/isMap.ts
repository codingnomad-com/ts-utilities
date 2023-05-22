// RETURNS: true // isMap(new Map([]))

export const isMap = (value: unknown): value is Map<unknown, unknown> => {
  return value instanceof Map;
};

export default isMap;
