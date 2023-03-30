import { expect, test } from '@playwright/test';
import { isInteger } from './isInteger';

test.describe.configure({ mode: 'parallel' });

test('returns false if value is null', async () => {
  const value = null;

  const valueIsInteger = isInteger(value);

  expect(valueIsInteger).toBeFalsy();
});

test('returns false if value is undefined', async () => {
  const valueIsInteger = isInteger();

  expect(valueIsInteger).toBeFalsy();
});

test('returns false if value is empty', async () => {
  const value = '';

  const valueIsInteger = isInteger(value);

  expect(valueIsInteger).toBeFalsy();
});

test('returns false if value contains non numeric characters', async () => {
  const value = 'abc123';

  const valueIsInteger = isInteger(value);

  expect(valueIsInteger).toBeFalsy();
});

test('returns false if value contains whitespace around numbers', async () => {
  const value = ' 123 ';

  const valueIsInteger = isInteger(value);

  expect(valueIsInteger).toBeFalsy();
});

test('returns false if value contains . (dot)', async () => {
  const value = '12.3';

  const valueIsInteger = isInteger(value);

  expect(valueIsInteger).toBeFalsy();
});

test('returns false if value contains , (comma)', async () => {
  const value = '12,3';

  const valueIsInteger = isInteger(value);

  expect(valueIsInteger).toBeFalsy();
});

test('returns true if value contains only numeric characters', async () => {
  const value = '123';

  const valueIsInteger = isInteger(value);

  expect(valueIsInteger).toBeTruthy();
});

test('returns false if value contains only but many numeric characters', async () => {
  const value = '987654321987654321987654321';

  const valueIsInteger = isInteger(value);

  expect(valueIsInteger).toBeTruthy();
});
