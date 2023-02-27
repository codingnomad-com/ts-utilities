import { expect, test } from '@playwright/test';
import { isNotBlank } from './isNotBlank';

test.describe.configure({ mode: 'parallel' });

test('returns false if value is null', async () => {
  const valueIsNotBlank = isNotBlank(null);

  expect(valueIsNotBlank).toBeFalsy();
});

test('returns false if value is undefined', async () => {
  const valueIsNotBlank = isNotBlank();

  expect(valueIsNotBlank).toBeFalsy();
});

test('returns false if value is empty', async () => {
  const valueIsNotBlank = isNotBlank('');

  expect(valueIsNotBlank).toBeFalsy();
});

test('returns false if value contains only whitespaces', async () => {
  const valueIsNotBlank = isNotBlank('      ');

  expect(valueIsNotBlank).toBeFalsy();
});

test('returns true if value contains any characters', async () => {
  const valueIsNotBlank = isNotBlank('a');

  expect(valueIsNotBlank).toBeTruthy();
});

test('returns true if value contains strign with 0', async () => {
  const valueIsNotBlank = isNotBlank('0');

  expect(valueIsNotBlank).toBeTruthy();
});
