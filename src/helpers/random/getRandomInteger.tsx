// RETURNS: 1...100 // randomInteger()
// RETURNS: 5...10 // randomInteger({ min: 5, max: 10})

import { MinMaxNumberConfig } from './interfaces/MinMaxNumberConfig';

export const getRandomInteger = (
  config: MinMaxNumberConfig = { min: 0, max: 100 },
): number => {
  const min = config.min ?? 0;
  const max = config.max ?? 100;

  return Math.floor(Math.random() * (max - min)) + min;
};
