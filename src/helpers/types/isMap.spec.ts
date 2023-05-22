import { expect, test } from '@playwright/test';
import { isMap } from './isMap';

test.describe.configure({ mode: 'parallel' });

test('returns "true" for a map', async () => {
  const value = new Map([]);

  const type = isMap(value);

  expect(type).toBeTruthy();
});

test('returns "false" for a promise', async () => {
  const value = new Promise((resolveInner) => {
    setTimeout(resolveInner, 1000);
  });

  const type = isMap(value);

  expect(type).toBeFalsy();
});

test('returns "false" for a symbol', async () => {
  const value = Symbol('key');

  const type = isMap(value);

  expect(type).toBeFalsy();
});

test('returns "false" for a regular expression', async () => {
  const value = /bc*d/;

  const type = isMap(value);

  expect(type).toBeFalsy();
});

test('returns "false" for a regular string', async () => {
  const value = "I'm a string";

  const type = isMap(value);

  expect(type).toBeFalsy();
});

test('returns "false" for an array', async () => {
  const value = ['a', 'b'];

  const type = isMap(value);

  expect(type).toBeFalsy();
});

test('returns "false" for a number', async () => {
  const value = 1234;

  const type = isMap(value);

  expect(type).toBeFalsy();
});

test('returns "false" for undefined', async () => {
  const value = undefined;

  const type = isMap(value);

  expect(type).toBeFalsy();
});

test('returns "false" for null', async () => {
  const value = null;

  const type = isMap(value);

  expect(type).toBeFalsy();
});

test('returns "false" for a boolean', async () => {
  const value = false;

  const type = isMap(value);

  expect(type).toBeFalsy();
});
