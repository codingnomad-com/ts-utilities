// RETURNS: true // isObject({a: 'b'})
// RETURNS: true // isObject(['a', 'b'])

export const isObject = (value: unknown): value is object => {
  return value !== null && typeof value === 'object';
};

export default isObject;
