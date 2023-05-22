import { getRandomInteger } from '~/random/getRandomInteger';
import { getRandomString } from '~/random/getRandomString';
import { IGetRandomIntegerProps } from '~/random/interfaces/IGetRandomIntegerProps';
import { IGetRandomStringProps } from '~/random/interfaces/IGetRandomStringProps';
import { IRandom } from './interfaces/IRandom';

export const Random = (): IRandom => ({
  getRandomInt: (props: IGetRandomIntegerProps) => getRandomInteger(props),
  getRandomInteger: (props: IGetRandomIntegerProps) => getRandomInteger(props),
  getRandomString: (props: IGetRandomStringProps) => getRandomString(props),
});
