export const shuffle = <T>(inputArray: T[]): T[] => {
  const outputArray = [];

  for (let i = inputArray.length; i > 0; --i) {
    outputArray.push(inputArray.splice(Math.random() * i || 0, 1)[0]);
  }

  return outputArray;
};

export default shuffle;
