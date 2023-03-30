import { getRandomInteger } from '~/random/getRandomInteger';
import { getRandomString } from '~/random/getRandomString';
import { GetRandomIntegerProps } from '~/random/interfaces/GetRandomIntegerProps';
import { GetRandomStringProps } from '~/random/interfaces/GetRandomStringProps';
import { RandomInterface } from './interfaces/RandomInterface';

export const Random = (): RandomInterface => ({
  getRandomInt: (props: GetRandomIntegerProps) => getRandomInteger(props),
  getRandomInteger: (props: GetRandomIntegerProps) => getRandomInteger(props),
  getRandomString: (props: GetRandomStringProps) => getRandomString(props),
});
