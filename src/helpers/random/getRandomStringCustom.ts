import { getRandomInteger } from './getRandomInteger';
import { IGetRandomStringCustomProps } from './interfaces/IGetRandomStringCustomProps';

export const getRandomStringCustom = (
  props: IGetRandomStringCustomProps,
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

export default getRandomStringCustom;
