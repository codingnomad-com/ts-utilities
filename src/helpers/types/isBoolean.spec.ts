import { expect, test } from '@playwright/test';
import { isBoolean } from './isBoolean';

test.describe.configure({ mode: 'parallel' });

test('returns "true" for a boolean', async () => {
  const value = false;

  const type = isBoolean(value);

  expect(type).toBeTruthy();
});

test('returns "false" for an array', async () => {
  const value = ['a', 'b'];

  const type = isBoolean(value);

  expect(type).toBeFalsy();
});

test('returns "false" for a number', async () => {
  const value = 1234;

  const type = isBoolean(value);

  expect(type).toBeFalsy();
});

test('returns "false" for a string', async () => {
  const value = "I'm a string";

  const type = isBoolean(value);

  expect(type).toBeFalsy();
});

test('returns "false" for undefined', async () => {
  const value = undefined;

  const type = isBoolean(value);

  expect(type).toBeFalsy();
});

test('returns "false" for null', async () => {
  const value = null;

  const type = isBoolean(value);

  expect(type).toBeFalsy();
});
