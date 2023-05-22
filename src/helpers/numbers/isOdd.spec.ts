import { expect, test } from '@playwright/test';
import { isOdd } from './isOdd';

test.describe.configure({ mode: 'parallel' });

test('returns "true" if number is odd', async () => {
  const value = 2124653;

  const valueIsOdd = isOdd(value);

  expect(valueIsOdd).toBeTruthy();
});

test('returns "false" if number is even', async () => {
  const value = 2124652;

  const valueIsOdd = isOdd(value);

  expect(valueIsOdd).toBeFalsy();
});
