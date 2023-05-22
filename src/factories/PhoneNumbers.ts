import { getDialCode } from '~/phoneNumbers/getDialCode';
import { getFormattedPhoneNumber } from '~/phoneNumbers/getFormattedPhoneNumber';
import { IGetDialCodeProps } from '~/phoneNumbers/interfaces/IGetDialCodeProps';
import { IGetFormattedPhoneNumberProps } from '~/phoneNumbers/interfaces/IGetFormattedPhoneNumberProps';
import { IPhoneNumbers } from './interfaces/IPhoneNumbers';

export const PhoneNumbers = (): IPhoneNumbers => ({
  getDialCode: (props: IGetDialCodeProps) => getDialCode(props),
  getFormattedPhoneNumber: (props: IGetFormattedPhoneNumberProps) =>
    getFormattedPhoneNumber(props),
});
