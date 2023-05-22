import { IGetDialCodeProps } from '~/phoneNumbers/interfaces/IGetDialCodeProps';
import { IGetFormattedPhoneNumberProps } from '~/phoneNumbers/interfaces/IGetFormattedPhoneNumberProps';
import { Maybe } from '~/types/Maybe';

export interface IPhoneNumbers {
  getDialCode: (props: IGetDialCodeProps) => Maybe<string>;
  getFormattedPhoneNumber: (props: IGetFormattedPhoneNumberProps) => string;
}
