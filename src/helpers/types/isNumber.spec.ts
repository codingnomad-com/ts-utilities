import { expect, test } from '@playwright/test';
import { isNumber } from './isNumber';

test.describe.configure({ mode: 'parallel' });

test('returns "true" for a number', async () => {
  const value = 1234;

  const type = isNumber(value);

  expect(type).toBeTruthy();
});

test('returns "false" for an array', async () => {
  const value = ['a', 'b'];

  const type = isNumber(value);

  expect(type).toBeFalsy();
});

test('returns "false" for a string', async () => {
  const value = "I'm a string";

  const type = isNumber(value);

  expect(type).toBeFalsy();
});

test('returns "false" for undefined', async () => {
  const value = undefined;

  const type = isNumber(value);

  expect(type).toBeFalsy();
});

test('returns "false" for null', async () => {
  const value = null;

  const type = isNumber(value);

  expect(type).toBeFalsy();
});

test('returns "false" for a boolean', async () => {
  const value = false;

  const type = isNumber(value);

  expect(type).toBeFalsy();
});
