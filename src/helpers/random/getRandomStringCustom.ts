import { getRandomInteger } from './getRandomInteger';
import { GetRandomStringCustomProps } from './interfaces/GetRandomStringCustomProps';

export const getRandomStringCustom = (
  props: GetRandomStringCustomProps,
): string => {
  const { length, allowedChars } = props;

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
