// RETURNS: true // isEmpty(null)
// RETURNS: true // isEmpty(undefined)
// RETURNS: true // isEmpty('')
// RETURNS: false // isEmpty(' ')
// RETURNS: false // isEmpty('a')

export const isEmpty = (value?: string | null): boolean => {
  return !value || value.length === 0;
};
