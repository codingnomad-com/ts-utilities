// RETURNS: true // isBigInt(BigInt(9007199254740991))
// RETURNS: true // isBigInt(BigInt("9007199254740991"))
// RETURNS: true // isBigInt(BigInt("0x1fffffffffffff"))
// RETURNS: true // isBigInt(BigInt("0o377777777777777777"))
// RETURNS: true // isBigInt(BigInt("0b11111111111111111111111111111111111111111111111111111"))

export const isBigInt = (value: unknown): value is bigint => {
  return typeof value === 'bigint';
};

export default isBigInt;
