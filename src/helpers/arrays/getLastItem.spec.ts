import { expect, test } from '@playwright/test';
import { getLastItem } from './getLastItem';

test.describe.configure({ mode: 'parallel' });

test('returns 4', async () => {
  const items = [1, 2, 3, 4];

  const lastItem = getLastItem(items);

  expect(lastItem).toBe(4);
});

test('returns "fourth element"', async () => {
  const items = [
    'first element',
    'second element',
    'third element',
    'fourth element',
  ];

  const lastItem = getLastItem(items);

  expect(lastItem).toBe('fourth element');
});
