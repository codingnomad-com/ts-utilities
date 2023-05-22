import { IsoCodeType } from '../../../data/countries/types/IsoCodeType';

export interface IGetFormattedPhoneNumberProps {
  areaCode: string;
  countryCode: IsoCodeType;
  number: string;
  showZero?: boolean;
}
