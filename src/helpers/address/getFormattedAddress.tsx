/* eslint-disable no-nested-ternary */

import { GetFormattedAddressProps } from './interfaces/GetFormattedAddressProps';

// RETURNS: Augsburger Straße 27, 58452 Witten
// RETURNS: Augsburger Straße, 58452 Witten
// RETURNS: Augsburger Straße, Witten
// RETURNS: Augsburger Straße 27, Witten
// RETURNS: Augsburger Straße 27
// RETURNS: Augsburger Straße
// RETURNS: 58452 Witten
// RETURNS: Witten

export const getFormattedAddress = (
  props: GetFormattedAddressProps,
): string | undefined => {
  const { address, multiline = false } = props;
  const { street, streetNumber, zipCode, city } = address;

  const firstPart =
    street && streetNumber
      ? `${street} ${streetNumber}`
      : street
      ? `${street}`
      : undefined;

  const secondPart =
    zipCode && city ? `${zipCode} ${city}` : city ? `${city}` : undefined;

  if (firstPart && secondPart) {
    if (multiline) {
      return `${firstPart}<br />${secondPart}`;
    }

    return `${firstPart}, ${secondPart}`;
  }

  if (firstPart) {
    return firstPart;
  }

  if (secondPart) {
    return secondPart;
  }

  return undefined;
};
