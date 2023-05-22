import { expect, test } from '@playwright/test';
import { isType } from './isType';

test.describe.configure({ mode: 'parallel' });

test('returns "true" for a bigint number', async () => {
  const value = BigInt(9007199254740991);

  const type = isType(value, 'bigint');

  expect(type).toBeTruthy();
});

test('returns "true" for a bigint string', async () => {
  const value = BigInt('9007199254740991');

  const type = isType(value, 'bigint');

  expect(type).toBeTruthy();
});

test('returns "true" for a bigint hex', async () => {
  const value = BigInt('0x1fffffffffffff');

  const type = isType(value, 'bigint');

  expect(type).toBeTruthy();
});

test('returns "true" for a bigint octal', async () => {
  const value = BigInt('0o377777777777777777');

  const type = isType(value, 'bigint');

  expect(type).toBeTruthy();
});

test('returns "true" for a bigint binary', async () => {
  const value = BigInt(
    '0b11111111111111111111111111111111111111111111111111111',
  );

  const type = isType(value, 'bigint');

  expect(type).toBeTruthy();
});

test('returns "true" for a symbol', async () => {
  const value = Symbol('key');

  const type = isType(value, 'symbol');

  expect(type).toBeTruthy();
});

test('returns "true" for a regular string', async () => {
  const value = "I'm a string";

  const type = isType(value, 'string');

  expect(type).toBeTruthy();
});

test('returns "true" for a number', async () => {
  const value = 1234;

  const type = isType(value, 'number');

  expect(type).toBeTruthy();
});
