import { expect, test } from '@playwright/test';
import { isEmpty } from './isEmpty';

test.describe.configure({ mode: 'parallel' });

test('returns true if value is null', async () => {
  const valueIsEmpty = isEmpty(null);

  expect(valueIsEmpty).toBeTruthy();
});

test('returns true if value is undefined', async () => {
  const valueIsEmpty = isEmpty();

  expect(valueIsEmpty).toBeTruthy();
});

test('returns true if value is empty', async () => {
  const valueIsEmpty = isEmpty('');

  expect(valueIsEmpty).toBeTruthy();
});

test('returns false if value contains only whitespaces', async () => {
  const valueIsEmpty = isEmpty('      ');

  expect(valueIsEmpty).toBeFalsy();
});

test('returns false if value contains any characters', async () => {
  const valueIsEmpty = isEmpty('a');

  expect(valueIsEmpty).toBeFalsy();
});

test('returns false if value contains strign with 0', async () => {
  const valueIsEmpty = isEmpty('0');

  expect(valueIsEmpty).toBeFalsy();
});
