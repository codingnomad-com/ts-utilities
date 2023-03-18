import { getRandomInteger } from './getRandomInteger';

export const getRandomStringCustom = (
  length: number,
  allowedChars: string,
): string => {
  let value = '';

  for (let i = 0; i < length; i++) {
    const randomInt = getRandomInteger({
      min: 0,
      max: allowedChars.length,
    });

    value += allowedChars[randomInt];
  }

  return value;
};
