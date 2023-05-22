// RETURNS: 1...100 // getRandomInteger()
// RETURNS: 5...10 // getRandomInteger({ min: 5, max: 10})

import { IGetRandomIntegerProps } from './interfaces/IGetRandomIntegerProps';

export const getRandomInteger = (
  config: IGetRandomIntegerProps = { min: 0, max: 100 },
): number => {
  let { min = 0, max = 100 } = config;

  // If max is lesser than min, switch their values
  if (max < min) {
    const maxNew = min;
    const minNew = max;

    min = minNew;
    max = maxNew;

    // eslint-disable-next-line no-console
    console.warn(
      "max should always be greater than min. max and min's values have been swapped.",
    );
  }

  return Math.floor(Math.random() * (max - min)) + min;
};

export default getRandomInteger;
