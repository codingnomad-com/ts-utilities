import { expect, test } from '@playwright/test';
import { isArray } from './isArray';

test.describe.configure({ mode: 'parallel' });

test('returns "true" for an array', async () => {
  const value = ['a', 'b'];

  const type = isArray(value);

  expect(type).toBeTruthy();
});

test('returns "false" for a boolean', async () => {
  const value = false;

  const type = isArray(value);

  expect(type).toBeFalsy();
});

test('returns "false" for a number', async () => {
  const value = 1234;

  const type = isArray(value);

  expect(type).toBeFalsy();
});

test('returns "false" for a string', async () => {
  const value = "I'm a string";

  const type = isArray(value);

  expect(type).toBeFalsy();
});

test('returns "false" for undefined', async () => {
  const value = undefined;

  const type = isArray(value);

  expect(type).toBeFalsy();
});

test('returns "false" for null', async () => {
  const value = null;

  const type = isArray(value);

  expect(type).toBeFalsy();
});
