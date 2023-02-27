import { isEmpty } from './isEmpty';

// RETURNS: false // isNotBlank(null)
// RETURNS: false // isNotBlank(undefined)
// RETURNS: false // isNotBlank('')
// RETURNS: true // isNotBlank' ')
// RETURNS: true // isNotBlank('a')

export const isNotEmpty = (value?: string | null): boolean => {
  return !isEmpty(value);
};
