import { expect, test } from '@playwright/test';
import { isEven } from './isEven';

test.describe.configure({ mode: 'parallel' });

test('returns "true" if number is even', async () => {
  const value = 2124652;

  const valueIsEven = isEven(value);

  expect(valueIsEven).toBeTruthy();
});

test('returns "false" if number is odd', async () => {
  const value = 2124653;

  const valueIsEven = isEven(value);

  expect(valueIsEven).toBeFalsy();
});
