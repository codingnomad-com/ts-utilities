import { IGetFormattedAddressProps } from '~/address/interfaces/IGetFormattedAddressProps';
import { Maybe } from '~/types/Maybe';

export interface IAddress {
  getFormattedAddress: (props: IGetFormattedAddressProps) => Maybe<string>;
}
