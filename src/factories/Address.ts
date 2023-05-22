import { getFormattedAddress } from '../helpers/address/getFormattedAddress';
import { IGetFormattedAddressProps } from '../helpers/address/interfaces/IGetFormattedAddressProps';
import { IAddress } from './interfaces/IAddress';

export const Address = (): IAddress => ({
  getFormattedAddress: (props: IGetFormattedAddressProps) =>
    getFormattedAddress(props),
});
