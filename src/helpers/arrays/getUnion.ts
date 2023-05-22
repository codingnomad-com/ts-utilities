export const getUnion = <T>(inputArray1: T[], inputArray2: T[]): T[] => {
  return Array.from(new Set([...inputArray1, ...inputArray2]));
};

export default getUnion;
