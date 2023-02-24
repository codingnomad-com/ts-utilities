import { expect, test } from '@playwright/test';
import { getFormattedYear } from './getFormattedYear';

test.describe.configure({ mode: 'parallel' });

test('returns "2023"', async () => {
  const timestamp = 1676983604423;

  const formattedTime = getFormattedYear({
    timestamp,
  });

  expect(formattedTime).toBe('2023');
});
