/* eslint-disable @typescript-eslint/no-explicit-any */
export const getObjectKeyValuePairs = (
  inputObject: any,
  separator = '.',
): [string, any][] => {
  const extract = (object: any, parentKey?: string): [string, any][] => {
    const keys: [string, any][] = [];

    Object.keys(object as {}).forEach((key) => {
      if (Object.prototype.hasOwnProperty.call(object, key)) {
        const value = object[key];

        const newKey = parentKey ? `${parentKey}${separator}${key}` : key;

        if (typeof value === 'object') {
          keys.push(...extract(value, newKey));
        } else {
          keys.push([newKey, value]);
        }
      }
    });

    return keys;
  };

  return extract(inputObject, separator);
};

export default getObjectKeyValuePairs;
