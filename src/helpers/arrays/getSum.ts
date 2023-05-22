export const getSum = (inputArray: number[]): number => {
  return inputArray.reduce((a, b) => a + b, 0);
};

export default getSum;
