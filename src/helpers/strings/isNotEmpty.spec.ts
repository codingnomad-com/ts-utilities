import { expect, test } from '@playwright/test';
import { isNotEmpty } from './isNotEmpty';

test.describe.configure({ mode: 'parallel' });

test('returns false if value is null', async () => {
  const valueIsNotEmpty = isNotEmpty(null);

  expect(valueIsNotEmpty).toBeFalsy();
});

test('returns false if value is undefined', async () => {
  const valueIsNotEmpty = isNotEmpty();

  expect(valueIsNotEmpty).toBeFalsy();
});

test('returns false if value is empty', async () => {
  const valueIsNotEmpty = isNotEmpty('');

  expect(valueIsNotEmpty).toBeFalsy();
});

test('returns true if value contains only whitespaces', async () => {
  const valueIsNotEmpty = isNotEmpty('      ');

  expect(valueIsNotEmpty).toBeFalsy();
});

test('returns true if value contains any characters', async () => {
  const valueIsNotEmpty = isNotEmpty('a');

  expect(valueIsNotEmpty).toBeTruthy();
});

test('returns true if value contains strign with 0', async () => {
  const valueIsNotEmpty = isNotEmpty('0');

  expect(valueIsNotEmpty).toBeTruthy();
});
