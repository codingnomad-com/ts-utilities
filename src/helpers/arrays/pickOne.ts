export const pickOne = <T>(inputArray: T[], index?: number): T => {
  return inputArray.splice(
    index && index >= 0 ? index : Math.random() * inputArray.length || 0,
    1,
  )[0];
};

export default pickOne;
