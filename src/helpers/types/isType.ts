// RETURNS: true // isType(BigInt(9007199254740991), 'bigint')
// RETURNS: true // isType(BigInt("9007199254740991"), 'bigint')
// RETURNS: true // isType(BigInt("0x1fffffffffffff"), 'bigint')
// RETURNS: true // isType(BigInt("0o377777777777777777"), 'bigint')
// RETURNS: true // isType(BigInt("0b11111111111111111111111111111111111111111111111111111"), 'bigint')
// RETURNS: true // isType('Symbol("key")', 'symbol')
// RETURNS: true // isType('string', 'string')
// RETURNS: true // isType(1234, 'number')

export const isType = <T>(value: unknown, type: T): value is T => {
  return typeof value === type;
};

export default isType;
