import { Maybe } from '~/types/Maybe';

// RETURNS: string-as-alug

export const slugify = (value?: string | null): Maybe<string> => {
  if (!value) {
    return undefined;
  }

  return value
    .normalize('NFD') // split an accented letter in the base letter and the acent
    .replace(/[\u0300-\u036f]/g, '') // remove all previously split accents
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9 ]/g, '') // remove all chars not letters, numbers and spaces (to be replaced)
    .replace(/\s+/g, '-'); // separator
};
