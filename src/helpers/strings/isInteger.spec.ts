import { expect, test } from '@playwright/test';
import { isInteger } from './isInteger';

test.describe.configure({ mode: 'parallel' });

test('returns false string if value is null', async () => {
  const value = null;

  const formattedValue = isInteger(value);

  expect(formattedValue).toBeFalsy();
});

test('returns empty string if value is undefined', async () => {
  const formattedValue = isInteger();

  expect(formattedValue).toBeFalsy();
});

test('returns empty string if value is empty', async () => {
  const value = '';

  const formattedValue = isInteger(value);

  expect(formattedValue).toBeFalsy();
});

test('returns false if value does contain whitespace', async () => {
  const value = '     ';

  const formattedValue = isInteger(value);

  expect(formattedValue).toBeFalsy();
});

test('returns false if value does not contain any numbers', async () => {
  const value = 'asdfasdfASKJDKLASJD"!@@@##%*()_+=-{[}^~]?/:.>,<';

  const formattedValue = isInteger(value);

  expect(formattedValue).toBeFalsy();
});

test('returns false if value has whitespace around numbers', async () => {
  const value = ' 123 ';

  const formattedValue = isInteger(value);

  expect(formattedValue).toBeFalsy();
});

test('returns false if value contains . (dot)', async () => {
  const value = '12.3';

  const formattedValue = isInteger(value);

  expect(formattedValue).toBeFalsy();
});

test('returns false if value contains , (comma)', async () => {
  const value = '12,3';

  const formattedValue = isInteger(value);

  expect(formattedValue).toBeFalsy();
});

test('returns true if value contains only numeric characters', async () => {
  const value = '123';

  const formattedValue = isInteger(value);

  expect(formattedValue).toBeTruthy();
});

test('returns true if value contains only numeric characters, even if many', async () => {
  const value = '123456789012345678901234567890';

  const formattedValue = isInteger(value);

  expect(formattedValue).toBeTruthy();
});
