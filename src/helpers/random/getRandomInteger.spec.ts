import { expect, test } from '@playwright/test';
import { getRandomInteger } from './getRandomInteger';

test.describe.configure({ mode: 'parallel' });

test('returns random integer between 5 and 10', async () => {
  const min = 5;
  const max = 10;

  const valuegetRandomInteger = getRandomInteger({ min, max });

  expect(valuegetRandomInteger).toBeGreaterThanOrEqual(min);
  expect(valuegetRandomInteger).toBeLessThanOrEqual(max);
});

test('returns random integer between 100 and 101', async () => {
  const min = 100;
  const max = 101;

  const valuegetRandomInteger = getRandomInteger({ min, max });

  expect(valuegetRandomInteger).toBeGreaterThanOrEqual(min);
  expect(valuegetRandomInteger).toBeLessThanOrEqual(max);
});

test('returns exact integer if min and max are equal', async () => {
  const valuegetRandomInteger1 = getRandomInteger({ min: 1, max: 1 });
  const valuegetRandomInteger46 = getRandomInteger({ min: 46, max: 46 });
  const valuegetRandomInteger46543 = getRandomInteger({
    min: 46543,
    max: 46543,
  });

  expect(valuegetRandomInteger1).toBe(1);
  expect(valuegetRandomInteger46).toBe(46);
  expect(valuegetRandomInteger46543).toBe(46543);
});

test('returns random integer between 0 and 100 by default', async () => {
  const valuegetRandomInteger = getRandomInteger();

  expect(valuegetRandomInteger).toBeGreaterThanOrEqual(0);
  expect(valuegetRandomInteger).toBeLessThanOrEqual(100);
});

test('returns random integer between 0 and max informed', async () => {
  const max = 20;

  const valuegetRandomInteger = getRandomInteger({ max });

  expect(valuegetRandomInteger).toBeGreaterThanOrEqual(0);
  expect(valuegetRandomInteger).toBeLessThanOrEqual(max);
});

test('returns random integer between min informed and max default (100)', async () => {
  const min = 20;

  const valuegetRandomInteger = getRandomInteger({ min });

  expect(valuegetRandomInteger).toBeGreaterThanOrEqual(min);
  expect(valuegetRandomInteger).toBeLessThanOrEqual(100);
});
