import { expect, test } from '@playwright/test';
import { isEmpty } from './isEmpty';

test.describe.configure({ mode: 'parallel' });

test('returns true if value is null', async () => {
  const value = null;

  const valueIsEmpty = isEmpty(value);

  expect(valueIsEmpty).toBeTruthy();
});

test('returns true if value is undefined', async () => {
  const valueIsEmpty = isEmpty();

  expect(valueIsEmpty).toBeTruthy();
});

test('returns true if value is empty', async () => {
  const value = '';

  const valueIsEmpty = isEmpty(value);

  expect(valueIsEmpty).toBeTruthy();
});

test('returns false if value contains only whitespaces', async () => {
  const value = '      ';

  const valueIsEmpty = isEmpty(value);

  expect(valueIsEmpty).toBeFalsy();
});

test('returns false if value contains any characters', async () => {
  const value = 'a';

  const valueIsEmpty = isEmpty(value);

  expect(valueIsEmpty).toBeFalsy();
});

test('returns false if value contains strign with 0', async () => {
  const value = '0';

  const valueIsEmpty = isEmpty(value);

  expect(valueIsEmpty).toBeFalsy();
});
