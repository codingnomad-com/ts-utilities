// RETURNS: true // isBetween(50, 10, 100)
// RETURNS: true // isBetween(10, 10, 100)
// RETURNS: true // isBetween(100, 10, 100)
// RETURNS: false // isBetween(10, 10, 100, 'exclude-lower')
// RETURNS: false // isBetween(100, 10, 100, 'exclude-upper')
// RETURNS: false // isBetween(10, 10, 100, 'exclude')
// RETURNS: false // isBetween(100, 10, 100, 'exclude')

export const isBetween = (
  value: number,
  lowerBound: number,
  upperBound: number,
  option:
    | 'include'
    | 'exclude'
    | 'include-lower'
    | 'include-upper'
    | 'exclude-lower'
    | 'exclude-upper' = 'include',
): boolean | null => {
  if (option === 'include') {
    return lowerBound <= value && value <= upperBound;
  }

  if (option === 'exclude') {
    return lowerBound < value && value < upperBound;
  }

  if (option === 'exclude-lower' || option === 'include-upper') {
    return lowerBound < value && value <= upperBound;
  }

  if (option === 'include-lower' || option === 'exclude-upper') {
    return lowerBound <= value && value < upperBound;
  }

  return null;
};

export default isBetween;
