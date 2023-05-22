// RETURNS: true // isRegExp(/bc*c/)

export const isRegExp = (value: unknown): value is RegExp => {
  return value instanceof RegExp;
};

export default isRegExp;
