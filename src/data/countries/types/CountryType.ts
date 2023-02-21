import { IsoCodeType } from './IsoCodeType';

export type CountryType = {
  name: string;
  dialCode: string;
  isoCode: IsoCodeType;
  flag: string;
};
