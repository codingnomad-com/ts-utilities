// RETURNS: true // isInteger('123')
// RETURNS: false // isInteger('12.3')
// RETURNS: false // isInteger('12,3')
// RETURNS: false // isInteger('abc123')
// RETURNS: false // isInteger(' 123 ')

export const isInteger = (value?: string | null): boolean => {
  if (!value || value.includes(' ') || value.includes('.')) {
    return false;
  }

  return !Number.isNaN(+value);
};
