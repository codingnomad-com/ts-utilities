export const getDifference = <T>(inputArray1: T[], inputArray2: T[]): T[] => {
  return inputArray1.filter((x) => !inputArray2.includes(x));
};

export default getDifference;
