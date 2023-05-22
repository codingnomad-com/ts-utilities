import { expect, test } from '@playwright/test';
import { isArrayOfStrings } from './isArrayOfStrings';

test.describe.configure({ mode: 'parallel' });

test('returns "false" for a function', async () => {
  const value = () => null;

  const type = isArrayOfStrings(value);

  expect(type).toBeFalsy();
});

test('returns "false" for an object', async () => {
  const value = { a: 'b' };

  const type = isArrayOfStrings(value);

  expect(type).toBeFalsy();
});

test('returns "true" for an array', async () => {
  const value = ['a', 'b'];

  const type = isArrayOfStrings(value);

  expect(type).toBeTruthy();
});

test('returns "false" for an array', async () => {
  const value = [1, 2];

  const type = isArrayOfStrings(value);

  expect(type).toBeFalsy();
});

test('returns "false" for a boolean', async () => {
  const value = false;

  const type = isArrayOfStrings(value);

  expect(type).toBeFalsy();
});

test('returns "false" for a number', async () => {
  const value = 1234;

  const type = isArrayOfStrings(value);

  expect(type).toBeFalsy();
});

test('returns "false" for a string', async () => {
  const value = "I'm a string";

  const type = isArrayOfStrings(value);

  expect(type).toBeFalsy();
});

test('returns "false" for undefined', async () => {
  const value = undefined;

  const type = isArrayOfStrings(value);

  expect(type).toBeFalsy();
});

test('returns "false" for null', async () => {
  const value = null;

  const type = isArrayOfStrings(value);

  expect(type).toBeFalsy();
});
