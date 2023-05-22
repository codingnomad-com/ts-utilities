export const flatten = <T>(
  inputArray: T[],
  getChildren: ((item: T) => T[] | undefined) | undefined,
): T[] => {
  const itemsToYield = new Array<T>(...inputArray);
  const result = [];

  while (itemsToYield.length > 0) {
    const item = itemsToYield.shift();

    if (item) {
      result.push(item);

      const children = getChildren?.(item);

      children?.forEach((child) => {
        itemsToYield.push(child);
      });
    }
  }

  return result;
};

export default flatten;
