import { expect, test } from '@playwright/test';
import { isBlank } from './isBlank';

test.describe.configure({ mode: 'parallel' });

test('returns true if value is null', async () => {
  const value = null;

  const valueIsBlank = isBlank(value);

  expect(valueIsBlank).toBeTruthy();
});

test('returns true if value is undefined', async () => {
  const valueIsBlank = isBlank();

  expect(valueIsBlank).toBeTruthy();
});

test('returns true if value is empty', async () => {
  const value = '';

  const valueIsBlank = isBlank(value);

  expect(valueIsBlank).toBeTruthy();
});

test('returns true if value contains only whitespaces', async () => {
  const value = '      ';

  const valueIsBlank = isBlank(value);

  expect(valueIsBlank).toBeTruthy();
});

test('returns false if value contains any characters', async () => {
  const value = 'a';

  const valueIsBlank = isBlank(value);

  expect(valueIsBlank).toBeFalsy();
});

test('returns false if value contains strign with 0', async () => {
  const value = '0';

  const valueIsBlank = isBlank(value);

  expect(valueIsBlank).toBeFalsy();
});
