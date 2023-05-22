export const flatten = <T>(
  root: T,
  getChildren: ((item: T) => T[] | undefined) | undefined,
): T[] => {
  const result: T[] = [];

  if (root) {
    result.push(root);

    const children = getChildren?.(root);

    children?.forEach((child) => {
      result.push(...flatten(child, getChildren));
    });
  }

  return result;
};

export default flatten;
