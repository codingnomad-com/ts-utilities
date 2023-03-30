// RETURNS: 1...100 // getRandomInteger()
// RETURNS: 5...10 // getRandomInteger({ min: 5, max: 10})

import { GetRandomIntegerProps } from './interfaces/GetRandomIntegerProps';

export const getRandomInteger = (
  config: GetRandomIntegerProps = { min: 0, max: 100 },
): number => {
  const min = config.min ?? 0;
  const max = config.max ?? 100;

  return Math.floor(Math.random() * (max - min)) + min;
};
