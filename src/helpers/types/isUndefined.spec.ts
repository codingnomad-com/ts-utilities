import { expect, test } from '@playwright/test';
import { isUndefined } from './isUndefined';

test.describe.configure({ mode: 'parallel' });

test('returns "false" for a function', async () => {
  const value = () => null;

  const type = isUndefined(value);

  expect(type).toBeFalsy();
});

test('returns "false" for an object', async () => {
  const value = { a: 'b' };

  const type = isUndefined(value);

  expect(type).toBeFalsy();
});

test('returns "false" for an array', async () => {
  const value = ['a', 'b'];

  const type = isUndefined(value);

  expect(type).toBeFalsy();
});

test('returns "false" for a boolean', async () => {
  const value = false;

  const type = isUndefined(value);

  expect(type).toBeFalsy();
});

test('returns "false" for a number', async () => {
  const value = 1234;

  const type = isUndefined(value);

  expect(type).toBeFalsy();
});

test('returns "false" for a string', async () => {
  const value = "I'm a string";

  const type = isUndefined(value);

  expect(type).toBeFalsy();
});

test('returns "true" for undefined', async () => {
  const value = undefined;

  const type = isUndefined(value);

  expect(type).toBeTruthy();
});

test('returns "false" for null', async () => {
  const value = null;

  const type = isUndefined(value);

  expect(type).toBeFalsy();
});
