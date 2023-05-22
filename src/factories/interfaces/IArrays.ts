export interface IArrays {
  areEqual: <T>(inputArray1: T[], inputArray2: T[]) => boolean;
  flatten: <T>(
    inputArray: T[],
    getChildren: ((item: T) => T[] | undefined) | undefined,
  ) => T[];
  flattenRecursively: <T>(
    inputArray: T[],
    getChildren: ((item: T) => T[] | undefined) | undefined,
  ) => T[];
  getAverage: (inputArray: number[]) => number;
  getChunks: <T>(inputArray: T[], length: number) => T[][];
  getDifference: <T>(inputArray1: T[], inputArray2: T[]) => T[];
  getIntersection: <T>(inputArray1: T[], inputArray2: T[]) => T[];
  getLastItem: <T>(inputArray: T[]) => T;
  getMax: (inputArray: number[]) => number;
  getMin: (inputArray: number[]) => number;
  getRandomElement: <T>(inputArray: T[]) => T;
  getSum: (inputArray: number[]) => number;
  getUnion: <T>(inputArray1: T[], inputArray2: T[]) => T[];
  groupBy: <K, V>(inputArray: V[], selector: (input: V) => K) => Map<K, V[]>;
  pickOne: <T>(inputArray: T[], index?: number) => T;
  removeDuplicates: <T>(inputArray: T[]) => T[];
  shuffle: <T>(inputArray: T[]) => T[];
}
