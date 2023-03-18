import { expect, test } from '@playwright/test';
import { isDouble } from './isDouble';

test.describe.configure({ mode: 'parallel' });

test('returns false string if value is null', async () => {
  const formattedValue = isDouble(null);

  expect(formattedValue).toBeFalsy();
});

test('returns empty string if value is undefined', async () => {
  const formattedValue = isDouble();

  expect(formattedValue).toBeFalsy();
});

test('returns empty string if value is empty', async () => {
  const formattedValue = isDouble('');

  expect(formattedValue).toBeFalsy();
});

test('returns false if value does contain whitespace', async () => {
  const input = '     ';

  const formattedValue = isDouble(input);

  expect(formattedValue).toBeFalsy();
});

test('returns false if value does not contain any numbers', async () => {
  const input = 'asdfasdfASKJDKLASJD"!@@@##%*()_+=-{[}^~]?/:.>,<';

  const formattedValue = isDouble(input);

  expect(formattedValue).toBeFalsy();
});

test('returns false if value has whitespace around numbers', async () => {
  const input = ' 123 ';

  const formattedValue = isDouble(input);

  expect(formattedValue).toBeFalsy();
});

test('returns true if value contains . (dot)', async () => {
  const input = '12.3';

  const formattedValue = isDouble(input);

  expect(formattedValue).toBeTruthy();
});

test('returns false if value contains more than one . (dot)', async () => {
  const input = '12.3.456';

  const formattedValue = isDouble(input);

  expect(formattedValue).toBeFalsy();
});

test('returns false if value contains , (comma)', async () => {
  const input = '12,3';

  const formattedValue = isDouble(input);

  expect(formattedValue).toBeFalsy();
});

test('returns true if value contains only numeric characters', async () => {
  const input = '123';

  const formattedValue = isDouble(input);

  expect(formattedValue).toBeTruthy();
});

test('returns true if value contains only numeric characters, even if many', async () => {
  const input = '123456789012345678901234567890';

  const formattedValue = isDouble(input);

  expect(formattedValue).toBeTruthy();
});
