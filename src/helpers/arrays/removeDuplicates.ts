export const removeDuplicates = <T>(inputArray: T[]): T[] => {
  return Array.from(new Set(inputArray));
};

export default removeDuplicates;
