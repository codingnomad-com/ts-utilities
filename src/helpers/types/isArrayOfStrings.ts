import { isString } from './isString';

// RETURNS: true // isArrayOfStrings(['a', 'b'])

export const isArrayOfStrings = (value: unknown): value is string[] => {
  return Array.isArray(value) && value.every(isString);
};

export default isArrayOfStrings;
