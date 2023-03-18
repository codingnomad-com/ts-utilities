import { expect, test } from '@playwright/test';
import { isInteger } from './isInteger';

test.describe.configure({ mode: 'parallel' });

test('returns false if value is null', async () => {
  const valueIsInteger = isInteger(null);

  expect(valueIsInteger).toBeFalsy();
});

test('returns false if value is undefined', async () => {
  const valueIsInteger = isInteger();

  expect(valueIsInteger).toBeFalsy();
});

test('returns false if value is empty', async () => {
  const valueIsInteger = isInteger('');

  expect(valueIsInteger).toBeFalsy();
});

test('returns false if value contains non numeric characters', async () => {
  const valueIsInteger = isInteger('abc123');

  expect(valueIsInteger).toBeFalsy();
});

test('returns false if value contains whitespace around numbers', async () => {
  const valueIsInteger = isInteger(' 123 ');

  expect(valueIsInteger).toBeFalsy();
});

test('returns false if value contains . (dot)', async () => {
  const valueIsInteger = isInteger('12.3');

  expect(valueIsInteger).toBeFalsy();
});

test('returns false if value contains , (comma)', async () => {
  const valueIsInteger = isInteger('12,3');

  expect(valueIsInteger).toBeFalsy();
});

test('returns true if value contains only numeric characters', async () => {
  const valueIsInteger = isInteger('123');

  expect(valueIsInteger).toBeTruthy();
});

test('returns false if value contains only but many numeric characters', async () => {
  const valueIsInteger = isInteger('123456789123456789123456789');

  expect(valueIsInteger).toBeTruthy();
});
