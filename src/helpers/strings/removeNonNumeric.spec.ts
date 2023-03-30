import { expect, test } from '@playwright/test';
import { removeNonNumeric } from './removeNonNumeric';

test.describe.configure({ mode: 'parallel' });

test('returns empty string if value is null', async () => {
  const value = null;

  const formattedValue = removeNonNumeric(value);

  expect(formattedValue).toBe('');
});

test('returns empty string if value is undefined', async () => {
  const formattedValue = removeNonNumeric();

  expect(formattedValue).toBe('');
});

test('returns empty string if value is empty', async () => {
  const value = '';

  const formattedValue = removeNonNumeric(value);

  expect(formattedValue).toBe('');
});

test('returns empty string if value does not contain any numbers', async () => {
  const value = 'asdfasdfASKJDKLASJD"!@@@##%*()_+=-{[}^~]?/:.>,<';

  const formattedValue = removeNonNumeric(value);

  expect(formattedValue).toBe('');
});

test('returns value string if value contains only numbers', async () => {
  const value = '1234567890';

  const formattedValue = removeNonNumeric(value);

  expect(formattedValue).toBe(value);
});

test('returns only numeric characters', async () => {
  const value = 'oiruge9p47tyuHDED341P(*&WGHEDfp9)I#$%*R';

  const formattedValue = removeNonNumeric(value);

  expect(formattedValue).toBe('9473419');
});

test('returns string with 0 (zero) if string with 0 (zero) was received', async () => {
  const value = '0';

  const formattedValue = removeNonNumeric(value);

  expect(formattedValue).toBe(value);
});
