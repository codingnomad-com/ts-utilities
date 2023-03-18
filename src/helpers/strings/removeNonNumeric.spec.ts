import { expect, test } from '@playwright/test';
import { removeNonNumeric } from './removeNonNumeric';

test.describe.configure({ mode: 'parallel' });

test('returns empty string if value is null', async () => {
  const formattedValue = removeNonNumeric(null);

  expect(formattedValue).toBe('');
});

test('returns empty string if value is undefined', async () => {
  const formattedValue = removeNonNumeric();

  expect(formattedValue).toBe('');
});

test('returns empty string if value is empty', async () => {
  const formattedValue = removeNonNumeric('');

  expect(formattedValue).toBe('');
});

test('returns empty string if value does not contain any numbers', async () => {
  const input = 'asdfasdfASKJDKLASJD"!@@@##%*()_+=-{[}^~]?/:.>,<';

  const formattedValue = removeNonNumeric(input);

  expect(formattedValue).toBe('');
});

test('returns input string if value contains only numbers', async () => {
  const input = '1234567890';

  const formattedValue = removeNonNumeric(input);

  expect(formattedValue).toBe(input);
});

test('returns only numeric characters', async () => {
  const input = 'oiruge9p47tyuHDED341P(*&WGHEDfp9)I#$%*R';

  const formattedValue = removeNonNumeric(input);

  expect(formattedValue).toBe('9473419');
});

test('returns string with 0 (zero) if string with 0 (zero) was received', async () => {
  const input = '0';

  const formattedValue = removeNonNumeric(input);

  expect(formattedValue).toBe(input);
});
