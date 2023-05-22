import { expect, test } from '@playwright/test';
import { isSet } from './isSet';

test.describe.configure({ mode: 'parallel' });

test('returns "true" for a set', async () => {
  const value = new Set();

  const type = isSet(value);

  expect(type).toBeTruthy();
});

test('returns "false" for a map', async () => {
  const value = new Map([]);

  const type = isSet(value);

  expect(type).toBeFalsy();
});

test('returns "false" for a promise', async () => {
  const value = new Promise((resolveInner) => {
    setTimeout(resolveInner, 1000);
  });

  const type = isSet(value);

  expect(type).toBeFalsy();
});

test('returns "false" for a symbol', async () => {
  const value = Symbol('key');

  const type = isSet(value);

  expect(type).toBeFalsy();
});

test('returns "false" for a regular expression', async () => {
  const value = /bc*d/;

  const type = isSet(value);

  expect(type).toBeFalsy();
});

test('returns "false" for a regular string', async () => {
  const value = "I'm a string";

  const type = isSet(value);

  expect(type).toBeFalsy();
});

test('returns "false" for an array', async () => {
  const value = ['a', 'b'];

  const type = isSet(value);

  expect(type).toBeFalsy();
});

test('returns "false" for a number', async () => {
  const value = 1234;

  const type = isSet(value);

  expect(type).toBeFalsy();
});

test('returns "false" for undefined', async () => {
  const value = undefined;

  const type = isSet(value);

  expect(type).toBeFalsy();
});

test('returns "false" for null', async () => {
  const value = null;

  const type = isSet(value);

  expect(type).toBeFalsy();
});

test('returns "false" for a boolean', async () => {
  const value = false;

  const type = isSet(value);

  expect(type).toBeFalsy();
});
