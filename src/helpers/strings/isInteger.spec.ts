import { expect, test } from '@playwright/test';
import { isInteger } from './isInteger';

test.describe.configure({ mode: 'parallel' });

test('returns false string if value is null', async () => {
  const formattedValue = isInteger(null);

  expect(formattedValue).toBeFalsy();
});

test('returns empty string if value is undefined', async () => {
  const formattedValue = isInteger();

  expect(formattedValue).toBeFalsy();
});

test('returns empty string if value is empty', async () => {
  const formattedValue = isInteger('');

  expect(formattedValue).toBeFalsy();
});

test('returns false if value does contain whitespace', async () => {
  const input = '     ';

  const formattedValue = isInteger(input);

  expect(formattedValue).toBeFalsy();
});

test('returns false if value does not contain any numbers', async () => {
  const input = 'asdfasdfASKJDKLASJD"!@@@##%*()_+=-{[}^~]?/:.>,<';

  const formattedValue = isInteger(input);

  expect(formattedValue).toBeFalsy();
});

test('returns false if value has whitespace around numbers', async () => {
  const input = ' 123 ';

  const formattedValue = isInteger(input);

  expect(formattedValue).toBeFalsy();
});

test('returns false if value contains . (dot)', async () => {
  const input = '12.3';

  const formattedValue = isInteger(input);

  expect(formattedValue).toBeFalsy();
});

test('returns false if value contains , (comma)', async () => {
  const input = '12,3';

  const formattedValue = isInteger(input);

  expect(formattedValue).toBeFalsy();
});

test('returns true if value contains only numeric characters', async () => {
  const input = '123';

  const formattedValue = isInteger(input);

  expect(formattedValue).toBeTruthy();
});

test('returns true if value contains only numeric characters, even if many', async () => {
  const input = '123456789012345678901234567890';

  const formattedValue = isInteger(input);

  expect(formattedValue).toBeTruthy();
});
