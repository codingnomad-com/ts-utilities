// RETURNS: true // isDouble('123')
// RETURNS: true // isDouble('12.3')
// RETURNS: false // isDouble('12,3')
// RETURNS: false // isDouble('abc123')
// RETURNS: false // isDouble(' 123 ')

export const isDouble = (value?: string | null): boolean => {
  if (!value || value.includes(' ')) {
    return false;
  }

  return !Number.isNaN(+value);
};
