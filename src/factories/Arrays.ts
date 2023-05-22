import { areEqual } from '~/arrays/areEqual';
import { flatten } from '~/arrays/flatten';
import { flattenRecursively } from '~/arrays/flattenRecursively';
import { getAverage } from '~/arrays/getAverage';
import { getChunks } from '~/arrays/getChunks';
import { getDifference } from '~/arrays/getDifference';
import { getIntersection } from '~/arrays/getIntersection';
import { getLastItem } from '~/arrays/getLastItem';
import { getMax } from '~/arrays/getMax';
import { getMin } from '~/arrays/getMin';
import { getRandomElement } from '~/arrays/getRandomElement';
import { getSum } from '~/arrays/getSum';
import { getUnion } from '~/arrays/getUnion';
import { groupBy } from '~/arrays/groupBy';
import { pickOne } from '~/arrays/pickOne';
import { removeDuplicates } from '~/arrays/removeDuplicates';
import { shuffle } from '~/arrays/shuffle';
import { IArrays } from './interfaces/IArrays';

export const Arrays = (): IArrays => ({
  areEqual: <T>(inputArray1: T[], inputArray2: T[]) =>
    areEqual(inputArray1, inputArray2),
  flatten: <T>(
    inputArray: T[],
    getChildren: ((item: T) => T[] | undefined) | undefined,
  ) => flatten(inputArray, getChildren),
  flattenRecursively: <T>(
    inputArray: T[],
    getChildren: ((item: T) => T[] | undefined) | undefined,
  ) => flattenRecursively(inputArray, getChildren),
  getAverage: (inputArray: number[]) => getAverage(inputArray),
  getChunks: <T>(inputArray: T[], length: number) =>
    getChunks(inputArray, length),
  getDifference: <T>(inputArray1: T[], inputArray2: T[]) =>
    getDifference(inputArray1, inputArray2),
  getIntersection: <T>(inputArray1: T[], inputArray2: T[]) =>
    getIntersection(inputArray1, inputArray2),
  getLastItem: <T>(inputArray: T[]) => getLastItem(inputArray),
  getMax: (inputArray: number[]) => getMax(inputArray),
  getMin: (inputArray: number[]) => getMin(inputArray),
  getRandomElement: <T>(inputArray: T[]) => getRandomElement(inputArray),
  getSum: (inputArray: number[]) => getSum(inputArray),
  getUnion: <T>(inputArray1: T[], inputArray2: T[]) =>
    getUnion(inputArray1, inputArray2),
  groupBy: <K, V>(inputArray: V[], selector: (input: V) => K) =>
    groupBy(inputArray, selector),
  pickOne: <T>(inputArray: T[], index?: number) => pickOne(inputArray, index),
  removeDuplicates: <T>(inputArray: T[]) => removeDuplicates(inputArray),
  shuffle: <T>(inputArray: T[]) => shuffle(inputArray),
});
