import { getDialCode } from '~/phoneNumbers/getDialCode';
import { getFormattedPhoneNumber } from '~/phoneNumbers/getFormattedPhoneNumber';
import { GetDialCodeProps } from '~/phoneNumbers/interfaces/GetDialCodeProps';
import { GetFormattedPhoneNumberProps } from '~/phoneNumbers/interfaces/GetFormattedPhoneNumberProps';
import { PhoneNumbersInterface } from './interfaces/PhoneNumbersInterface';

export const PhoneNumbers = (): PhoneNumbersInterface => ({
  getDialCode: (props: GetDialCodeProps) => getDialCode(props),
  getFormattedPhoneNumber: (props: GetFormattedPhoneNumberProps) =>
    getFormattedPhoneNumber(props),
});
