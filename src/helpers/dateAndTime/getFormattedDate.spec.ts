import { expect, test } from '@playwright/test';
import { getFormattedDate } from './getFormattedDate';
import { TimeZone } from './types/TimeZone';

test.describe.configure({ mode: 'parallel' });

const timeZone: TimeZone = 'Asia/Manila';

test('returns "21.02.2023"', async () => {
  const timestamp = 1676983604423;

  const formattedDate = getFormattedDate({
    timestamp,
    options: {
      dayFormat: '2-digit',
      timeZone,
    },
  });

  expect(formattedDate).toBe('21.02.2023');
});
