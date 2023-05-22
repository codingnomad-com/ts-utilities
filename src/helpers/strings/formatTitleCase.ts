// RETURNS: I Am A Headline In Title Case

export const formatTitleCase = (value?: string | null): string => {
  if (!value) {
    return '';
  }

  return value
    .toLowerCase()
    .split(' ')
    .map((word) => `${word.charAt(0).toUpperCase()}${word.slice(1)}`)
    .join(' ');
};

export default formatTitleCase;
