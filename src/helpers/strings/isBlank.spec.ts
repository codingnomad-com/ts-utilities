import { expect, test } from '@playwright/test';
import { isBlank } from './isBlank';

test.describe.configure({ mode: 'parallel' });

test('returns true if value is null', async () => {
  const valueIsBlank = isBlank(null);

  expect(valueIsBlank).toBeTruthy();
});

test('returns true if value is undefined', async () => {
  const valueIsBlank = isBlank();

  expect(valueIsBlank).toBeTruthy();
});

test('returns true if value is empty', async () => {
  const valueIsBlank = isBlank('');

  expect(valueIsBlank).toBeTruthy();
});

test('returns true if value contains only whitespaces', async () => {
  const valueIsBlank = isBlank('      ');

  expect(valueIsBlank).toBeTruthy();
});

test('returns false if value contains any characters', async () => {
  const valueIsBlank = isBlank('a');

  expect(valueIsBlank).toBeFalsy();
});

test('returns false if value contains strign with 0', async () => {
  const valueIsBlank = isBlank('0');

  expect(valueIsBlank).toBeTruthy();
});
