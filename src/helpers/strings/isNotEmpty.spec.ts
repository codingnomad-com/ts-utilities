import { expect, test } from '@playwright/test';
import { isNotEmpty } from './isNotEmpty';

test.describe.configure({ mode: 'parallel' });

test('returns false if value is null', async () => {
  const value = null;

  const valueIsNotEmpty = isNotEmpty(value);

  expect(valueIsNotEmpty).toBeFalsy();
});

test('returns false if value is undefined', async () => {
  const valueIsNotEmpty = isNotEmpty();

  expect(valueIsNotEmpty).toBeFalsy();
});

test('returns false if value is empty', async () => {
  const value = '';

  const valueIsNotEmpty = isNotEmpty(value);

  expect(valueIsNotEmpty).toBeFalsy();
});

test('returns true if value contains only whitespaces', async () => {
  const value = '      ';

  const valueIsNotEmpty = isNotEmpty(value);

  expect(valueIsNotEmpty).toBeTruthy();
});

test('returns true if value contains any characters', async () => {
  const value = 'a';

  const valueIsNotEmpty = isNotEmpty(value);

  expect(valueIsNotEmpty).toBeTruthy();
});

test('returns true if value contains strign with 0', async () => {
  const value = 'o';

  const valueIsNotEmpty = isNotEmpty(value);

  expect(valueIsNotEmpty).toBeTruthy();
});
