import { GetDialCodeProps } from '~/phoneNumbers/interfaces/GetDialCodeProps';
import { GetFormattedPhoneNumberProps } from '~/phoneNumbers/interfaces/GetFormattedPhoneNumberProps';
import { Maybe } from '~/types/Maybe';

export interface PhoneNumbersInterface {
  getDialCode: (props: GetDialCodeProps) => Maybe<string>;
  getFormattedPhoneNumber: (props: GetFormattedPhoneNumberProps) => string;
}
