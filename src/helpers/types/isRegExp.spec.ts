import { expect, test } from '@playwright/test';
import { isRegExp } from './isRegExp';

test.describe.configure({ mode: 'parallel' });

test('returns "true" for a regular expression', async () => {
  const value = /bc*d/;

  const type = isRegExp(value);

  expect(type).toBeTruthy();
});

test('returns "false" for a regular string', async () => {
  const value = "I'm a string";

  const type = isRegExp(value);

  expect(type).toBeFalsy();
});

test('returns "false" for an array', async () => {
  const value = ['a', 'b'];

  const type = isRegExp(value);

  expect(type).toBeFalsy();
});

test('returns "false" for a number', async () => {
  const value = 1234;

  const type = isRegExp(value);

  expect(type).toBeFalsy();
});

test('returns "false" for undefined', async () => {
  const value = undefined;

  const type = isRegExp(value);

  expect(type).toBeFalsy();
});

test('returns "false" for null', async () => {
  const value = null;

  const type = isRegExp(value);

  expect(type).toBeFalsy();
});

test('returns "false" for a boolean', async () => {
  const value = false;

  const type = isRegExp(value);

  expect(type).toBeFalsy();
});
