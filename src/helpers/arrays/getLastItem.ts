// RETURNS: 4 // getLastItem([1, 2, 3, 4])

export const getLastItem = <T>(inputArray: T[]): T => {
  return inputArray[inputArray.length - 1];
};

export default getLastItem;
