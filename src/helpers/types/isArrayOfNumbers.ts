import { isNumber } from './isNumber';

// RETURNS: true // isArrayOfNumbers(['a', 'b'])

export const isArrayOfNumbers = (value: unknown): value is number[] => {
  return Array.isArray(value) && value.every(isNumber);
};

export default isArrayOfNumbers;
