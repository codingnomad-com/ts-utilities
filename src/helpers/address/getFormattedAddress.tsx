// RETURNS: Am Lenkwerk 5, 33609 Bielefeld
// RETURNS: Am Lenkwerk, 33609 Bielefeld
// RETURNS: Am Lenkwerk, Bielefeld
// RETURNS: Am Lenkwerk 5, Bielefeld
// RETURNS: Am Lenkwerk 5, 33609
// RETURNS: Am Lenkwerk, 33609
// RETURNS: 33609 Bielefeld
// RETURNS: Bielefeld

const getFormattedAddress = (
  street?: string,
  streetNumber?: string,
  zipCode?: string,
  city?: string,
  multiline = true
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
