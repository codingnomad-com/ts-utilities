import { expect, test } from '@playwright/test';
import { isObject } from './isObject';

test.describe.configure({ mode: 'parallel' });

test('returns "true" for an object', async () => {
  const value = { a: 'b' };

  const type = isObject(value);

  expect(type).toBeTruthy();
});

test('returns "true" for an array', async () => {
  const value = ['a', 'b'];

  const type = isObject(value);

  expect(type).toBeTruthy();
});

test('returns "false" for a boolean', async () => {
  const value = false;

  const type = isObject(value);

  expect(type).toBeFalsy();
});

test('returns "false" for a number', async () => {
  const value = 1234;

  const type = isObject(value);

  expect(type).toBeFalsy();
});

test('returns "false" for a string', async () => {
  const value = "I'm a string";

  const type = isObject(value);

  expect(type).toBeFalsy();
});

test('returns "false" for undefined', async () => {
  const value = undefined;

  const type = isObject(value);

  expect(type).toBeFalsy();
});

test('returns "false" for null', async () => {
  const value = null;

  const type = isObject(value);

  expect(type).toBeFalsy();
});
