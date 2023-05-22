import { expect, test } from '@playwright/test';
import { getType } from './getType';

test.describe.configure({ mode: 'parallel' });

test('returns "Array"', async () => {
  const value = ['a', 'b'];

  const type = getType(value);

  expect(type).toBe('Array');
});

test('returns "Boolean"', async () => {
  const value = false;

  const type = getType(value);

  expect(type).toBe('Boolean');
});

test('returns "Function"', async () => {
  const value = () => null;

  const type = getType(value);

  expect(type).toBe('Function');
});

test('returns "Null"', async () => {
  const value = null;

  const type = getType(value);

  expect(type).toBe('Null');
});

test('returns "Number"', async () => {
  const value = 1;

  const type = getType(value);

  expect(type).toBe('Number');
});

test('returns "Object"', async () => {
  const value = { a: 'b' };

  const type = getType(value);

  expect(type).toBe('Object');
});

test('returns "String"', async () => {
  const value = 'This is a test string';

  const type = getType(value);

  expect(type).toBe('String');
});

test('returns "Undefined"', async () => {
  const value = undefined;

  const type = getType(value);

  expect(type).toBe('Undefined');
});
