import { GetRandomIntegerProps } from '~/random/interfaces/GetRandomIntegerProps';
import { GetRandomStringProps } from '~/random/interfaces/GetRandomStringProps';

export interface RandomInterface {
  getRandomInt: (props: GetRandomIntegerProps) => number;
  getRandomInteger: (props: GetRandomIntegerProps) => number;
  getRandomString: (props: GetRandomStringProps) => string;
}
