import { getFormattedAddress } from './address/getFormattedAddress';
import { GetFormattedAddressProps } from './address/interfaces/GetFormattedAddressProps';
import { AddressInterface } from './interfaces/AddressInterface';

export const Address = (): AddressInterface => ({
  getFormattedAddress: (props: GetFormattedAddressProps) =>
    getFormattedAddress(props),
});
