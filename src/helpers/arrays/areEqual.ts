// RETURNS: true // areEqual([1, 2, 3], [1, 2, 3])
// RETURNS: true // areEqual([1, 2, 3], [1, 3, 2])
// RETURNS: true // areEqual(['one', 'two', 'three'], ['one', 'two', 'three'])
// RETURNS: true // areEqual(['one', 'two', 'three'], ['three', 'one', 'two'])
// RETURNS: false // areEqual([1, 2, 3], [1, 2])
// RETURNS: false // areEqual(['one', 'two', 'three'], ['one', 'two'])
// RETURNS: false // areEqual(['one', 2, 'three'], ['one', 'two', 'three'])

export const areEqual = <T>(inputArray1: T[], inputArray2: T[]): boolean => {
  return (
    JSON.stringify([...new Set(inputArray1)].sort()) ===
    JSON.stringify([...new Set(inputArray2)].sort())
  );
};

export default areEqual;
