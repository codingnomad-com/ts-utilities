import { expect, test } from '@playwright/test';
import { isFunction } from './isFunction';

test.describe.configure({ mode: 'parallel' });

test('returns "true" for a function', async () => {
  const value = () => null;

  const type = isFunction(value);

  expect(type).toBeTruthy();
});

test('returns "false" for an object', async () => {
  const value = { a: 'b' };

  const type = isFunction(value);

  expect(type).toBeFalsy();
});

test('returns "false" for an array', async () => {
  const value = ['a', 'b'];

  const type = isFunction(value);

  expect(type).toBeFalsy();
});

test('returns "false" for a boolean', async () => {
  const value = false;

  const type = isFunction(value);

  expect(type).toBeFalsy();
});

test('returns "false" for a number', async () => {
  const value = 1234;

  const type = isFunction(value);

  expect(type).toBeFalsy();
});

test('returns "false" for a string', async () => {
  const value = "I'm a string";

  const type = isFunction(value);

  expect(type).toBeFalsy();
});

test('returns "false" for undefined', async () => {
  const value = undefined;

  const type = isFunction(value);

  expect(type).toBeFalsy();
});

test('returns "false" for null', async () => {
  const value = null;

  const type = isFunction(value);

  expect(type).toBeFalsy();
});
