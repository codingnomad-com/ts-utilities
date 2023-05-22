// RETURNS: 123

export const removeNonNumeric = (value?: string | null): string => {
  if (!value) {
    return '';
  }

  return value.replace(/\D/g, '');
};

export default removeNonNumeric;
