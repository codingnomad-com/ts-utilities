import { IsoCodeType } from '../../../data/countries/types/IsoCodeType';

export interface GetFormattedPhoneNumberProps {
  areaCode: string;
  countryCode: IsoCodeType;
  number: string;
  showZero?: boolean;
}
