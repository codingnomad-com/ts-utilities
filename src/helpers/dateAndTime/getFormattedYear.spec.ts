import { expect, test } from '@playwright/test';
import { getFormattedYear } from './getFormattedYear';
import { TimeZone } from './types/TimeZone';

test.describe.configure({ mode: 'parallel' });

const timeZone: TimeZone = 'Asia/Manila';

test('returns "2023"', async () => {
  const timestamp = 1676983604423;

  const formattedTime = getFormattedYear({
    timestamp,
    options: {
      timeZone,
    },
  });

  expect(formattedTime).toBe('2023');
});
