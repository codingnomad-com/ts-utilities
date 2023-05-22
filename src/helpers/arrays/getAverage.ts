export const getAverage = (inputArray: number[]): number => {
  return inputArray.reduce((a, b) => a + b, 0) / inputArray.length;
};

export default getAverage;
