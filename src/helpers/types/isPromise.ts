// RETURNS: true // isPromise(new Promise((resolveInner) => {setTimeout(resolveInner, 1000);});)

export const isPromise = (value: unknown): value is Promise<unknown> => {
  return value instanceof Promise;
};

export default isPromise;
