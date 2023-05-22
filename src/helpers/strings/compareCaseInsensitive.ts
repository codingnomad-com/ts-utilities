export const compareCaseInsensitive = (
  string1: string,
  string2: string,
): boolean => {
  return string1.toLowerCase() === string2.toLowerCase();
};

export default compareCaseInsensitive;
