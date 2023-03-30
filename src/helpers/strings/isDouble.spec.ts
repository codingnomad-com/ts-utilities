import { expect, test } from '@playwright/test';
import { isDouble } from './isDouble';

test.describe.configure({ mode: 'parallel' });

test('returns false string if value is null', async () => {
  const value = null;

  const formattedValue = isDouble(value);

  expect(formattedValue).toBeFalsy();
});

test('returns empty string if value is undefined', async () => {
  const formattedValue = isDouble();

  expect(formattedValue).toBeFalsy();
});

test('returns empty string if value is empty', async () => {
  const value = '';

  const formattedValue = isDouble(value);

  expect(formattedValue).toBeFalsy();
});

test('returns false if value does contain whitespace', async () => {
  const value = '     ';

  const formattedValue = isDouble(value);

  expect(formattedValue).toBeFalsy();
});

test('returns false if value does not contain any numbers', async () => {
  const value = 'asdfasdfASKJDKLASJD"!@@@##%*()_+=-{[}^~]?/:.>,<';

  const formattedValue = isDouble(value);

  expect(formattedValue).toBeFalsy();
});

test('returns false if value has whitespace around numbers', async () => {
  const value = ' 123 ';

  const formattedValue = isDouble(value);

  expect(formattedValue).toBeFalsy();
});

test('returns true if value contains . (dot)', async () => {
  const value = '12.3';

  const formattedValue = isDouble(value);

  expect(formattedValue).toBeTruthy();
});

test('returns false if value contains more than one . (dot)', async () => {
  const value = '12.3.456';

  const formattedValue = isDouble(value);

  expect(formattedValue).toBeFalsy();
});

test('returns false if value contains , (comma)', async () => {
  const value = '12,3';

  const formattedValue = isDouble(value);

  expect(formattedValue).toBeFalsy();
});

test('returns true if value contains only numeric characters', async () => {
  const value = '123';

  const formattedValue = isDouble(value);

  expect(formattedValue).toBeTruthy();
});

test('returns true if value contains only numeric characters, even if many', async () => {
  const value = '123456789012345678901234567890';

  const formattedValue = isDouble(value);

  expect(formattedValue).toBeTruthy();
});
