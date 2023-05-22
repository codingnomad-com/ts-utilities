/* eslint-disable @typescript-eslint/no-explicit-any */

export const isUnion = <T extends Array<unknown>>(
  value: unknown,
  types: T,
): value is T[number] => {
  return types.some((t: any) => value instanceof t);
};

export default isUnion;
