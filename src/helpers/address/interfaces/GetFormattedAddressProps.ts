export interface GetFormattedAddressProps {
  address: {
    street?: string;
    streetNumber?: string;
    zipCode?: string;
    city?: string;
  };
  multiline?: boolean;
}
