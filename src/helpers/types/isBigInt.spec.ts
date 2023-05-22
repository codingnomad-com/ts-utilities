import { expect, test } from '@playwright/test';
import { isBigInt } from './isBigInt';

test.describe.configure({ mode: 'parallel' });

test('returns "true" for a bigint number', async () => {
  const value = BigInt(9007199254740991);

  const type = isBigInt(value);

  expect(type).toBeTruthy();
});

test('returns "true" for a bigint string', async () => {
  const value = BigInt('9007199254740991');

  const type = isBigInt(value);

  expect(type).toBeTruthy();
});

test('returns "true" for a bigint hex', async () => {
  const value = BigInt('0x1fffffffffffff');

  const type = isBigInt(value);

  expect(type).toBeTruthy();
});

test('returns "true" for a bigint octal', async () => {
  const value = BigInt('0o377777777777777777');

  const type = isBigInt(value);

  expect(type).toBeTruthy();
});

test('returns "true" for a bigint binary', async () => {
  const value = BigInt(
    '0b11111111111111111111111111111111111111111111111111111',
  );

  const type = isBigInt(value);

  expect(type).toBeTruthy();
});

test('returns "false" for a set', async () => {
  const value = new Set();

  const type = isBigInt(value);

  expect(type).toBeFalsy();
});

test('returns "false" for a map', async () => {
  const value = new Map([]);

  const type = isBigInt(value);

  expect(type).toBeFalsy();
});

test('returns "false" for a promise', async () => {
  const value = new Promise((resolveInner) => {
    setTimeout(resolveInner, 1000);
  });

  const type = isBigInt(value);

  expect(type).toBeFalsy();
});

test('returns "false" for a symbol', async () => {
  const value = Symbol('key');

  const type = isBigInt(value);

  expect(type).toBeFalsy();
});

test('returns "false" for a regular expression', async () => {
  const value = /bc*d/;

  const type = isBigInt(value);

  expect(type).toBeFalsy();
});

test('returns "false" for a regular string', async () => {
  const value = "I'm a string";

  const type = isBigInt(value);

  expect(type).toBeFalsy();
});

test('returns "false" for an array', async () => {
  const value = ['a', 'b'];

  const type = isBigInt(value);

  expect(type).toBeFalsy();
});

test('returns "false" for a number', async () => {
  const value = 1234;

  const type = isBigInt(value);

  expect(type).toBeFalsy();
});

test('returns "false" for undefined', async () => {
  const value = undefined;

  const type = isBigInt(value);

  expect(type).toBeFalsy();
});

test('returns "false" for null', async () => {
  const value = null;

  const type = isBigInt(value);

  expect(type).toBeFalsy();
});

test('returns "false" for a boolean', async () => {
  const value = false;

  const type = isBigInt(value);

  expect(type).toBeFalsy();
});
