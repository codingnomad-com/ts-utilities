import { expect, test } from '@playwright/test';
import getFormattedDate from './getFormattedDate';

test.describe.configure({ mode: 'parallel' });

test('returns "21.02.2023"', async () => {
  const timestamp = 1676983604423;

  const formattedDate = getFormattedDate({
    timestamp,
    options: {
      dayFormat: '2-digit',
    },
  });

  expect(formattedDate).toBe('21.02.2023');
});
