import { isEven } from './isEven';

export const isOdd = (value: number): boolean => {
  return !isEven(value);
};

export default isOdd;
