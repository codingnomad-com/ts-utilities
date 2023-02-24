import { expect, test } from '@playwright/test';
import { getYYYYMMDDDate } from './getYYYYMMDDDate';

test.describe.configure({ mode: 'parallel' });

test('returns "2023-02-21"', async () => {
  const timestamp = 1676983604423;

  const date = new Date(timestamp);

  const formattedDate = getYYYYMMDDDate(date);

  expect(formattedDate).toBe('2023-02-21');
});
