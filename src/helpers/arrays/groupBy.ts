export const groupBy = <K, V>(
  inputArray: V[],
  selector: (input: V) => K,
): Map<K, V[]> => {
  const map = new Map<K, Array<V>>();

  inputArray.forEach((item) => {
    const key = selector(item);
    const collection = map.get(key);
    if (!collection) {
      map.set(key, [item]);
    } else {
      collection.push(item);
    }
  });

  return map;
};

export default groupBy;
