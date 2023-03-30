// RETURNS: true // isBlank(null)
// RETURNS: true // isBlank(undefined)
// RETURNS: true // isBlank('')
// RETURNS: true // isBlank(' ')
// RETURNS: false // isBlank('a')

export const isBlank = (value?: string | null): boolean => {
  return !value || value.trim().length === 0;
};
