export const getChunks = <T>(inputArray: T[], length: number): T[][] => {
  return Array.from({ length: Math.ceil(inputArray.length / length) }, (_, i) =>
    inputArray.slice(i * length, i * length + length),
  );
};

export default getChunks;
