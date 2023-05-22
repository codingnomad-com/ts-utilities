export const flattenRecursively = <T>(
  inputArray: T[],
  getChildren: ((item: T) => T[] | undefined) | undefined,
): T[] => {
  const result: T[] = [];

  inputArray.forEach((item) => {
    result.push(item);

    const children = getChildren?.(item);

    if (children) {
      flattenRecursively(children, getChildren).forEach((child) => {
        result.push(child);
      });
    }
  });

  return result;
};

export default flattenRecursively;
