import { IGetRandomIntegerProps } from '~/random/interfaces/IGetRandomIntegerProps';
import { IGetRandomStringProps } from '~/random/interfaces/IGetRandomStringProps';

export interface IRandom {
  getRandomInt: (props: IGetRandomIntegerProps) => number;
  getRandomInteger: (props: IGetRandomIntegerProps) => number;
  getRandomString: (props: IGetRandomStringProps) => string;
}
