/* eslint-disable no-nested-ternary */
// RETURNS: Augsburger Straße 27, 58452 Witten
// RETURNS: Augsburger Straße, 58452 Witten
// RETURNS: Augsburger Straße, Witten
// RETURNS: Augsburger Straße 27, Witten
// RETURNS: Augsburger Straße 27, 58452
// RETURNS: Augsburger Straße, 58452
// RETURNS: 58452 Witten
// RETURNS: Witten

const getFormattedAddress = (
  street?: string,
  streetNumber?: string,
  zipCode?: string,
  city?: string,
  multiline = true,
): string | undefined => {
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

export default getFormattedAddress;
