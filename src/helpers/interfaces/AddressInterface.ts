import { GetFormattedAddressProps } from '~/address/interfaces/GetFormattedAddressProps';
import { Maybe } from '~/types/Maybe';

export interface AddressInterface {
  getFormattedAddress: (props: GetFormattedAddressProps) => Maybe<string>;
}
