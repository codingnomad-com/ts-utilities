// RETURNS: true // isSymbol(Symbol("key"))

export const isSymbol = (value: unknown): value is symbol => {
  return typeof value === 'symbol';
};

export default isSymbol;
