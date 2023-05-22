export const getRandomElement = <T>(inputArray: T[]): T => {
  return inputArray[Math.floor(Math.random() * inputArray.length || 0)];
};

export default getRandomElement;
