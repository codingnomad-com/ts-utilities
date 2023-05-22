import { expect, test } from '@playwright/test';
import { isPromise } from './isPromise';

test.describe.configure({ mode: 'parallel' });

test('returns "true" for a promise', async () => {
  const value = new Promise((resolveInner) => {
    setTimeout(resolveInner, 1000);
  });

  const type = isPromise(value);

  expect(type).toBeTruthy();
});

test('returns "false" for a symbol', async () => {
  const value = Symbol('key');

  const type = isPromise(value);

  expect(type).toBeFalsy();
});

test('returns "false" for a regular expression', async () => {
  const value = /bc*d/;

  const type = isPromise(value);

  expect(type).toBeFalsy();
});

test('returns "false" for a regular string', async () => {
  const value = "I'm a string";

  const type = isPromise(value);

  expect(type).toBeFalsy();
});

test('returns "false" for an array', async () => {
  const value = ['a', 'b'];

  const type = isPromise(value);

  expect(type).toBeFalsy();
});

test('returns "false" for a number', async () => {
  const value = 1234;

  const type = isPromise(value);

  expect(type).toBeFalsy();
});

test('returns "false" for undefined', async () => {
  const value = undefined;

  const type = isPromise(value);

  expect(type).toBeFalsy();
});

test('returns "false" for null', async () => {
  const value = null;

  const type = isPromise(value);

  expect(type).toBeFalsy();
});

test('returns "false" for a boolean', async () => {
  const value = false;

  const type = isPromise(value);

  expect(type).toBeFalsy();
});
