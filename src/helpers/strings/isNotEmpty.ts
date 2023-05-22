import { isEmpty } from './isEmpty';

// RETURNS: false // isNotEmpty(null)
// RETURNS: false // isNotEmpty(undefined)
// RETURNS: false // isNotEmpty('')
// RETURNS: true // isNotEmpty(' ')
// RETURNS: true // isNotEmpty('a')

export const isNotEmpty = (value?: string | null): boolean => {
  return !isEmpty(value);
};

export default isNotEmpty;
