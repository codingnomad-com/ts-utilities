import { isBlank } from './isBlank';

// RETURNS: false // isNotBlank(null)
// RETURNS: false // isNotBlank(undefined)
// RETURNS: false // isNotBlank('')
// RETURNS: false // isNotBlank(' ')
// RETURNS: true // isNotBlank('a')

export const isNotBlank = (value?: string | null): boolean => {
  return !isBlank(value);
};
