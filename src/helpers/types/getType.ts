// RETURNS: Array
// RETURNS: Boolean
// RETURNS: Function
// RETURNS: Null
// RETURNS: Number
// RETURNS: Object
// RETURNS: String
// RETURNS: Undefined

export const getType = (value: unknown): string => {
  return Object.prototype.toString.call(value).slice(8, -1);
};

export default getType;
