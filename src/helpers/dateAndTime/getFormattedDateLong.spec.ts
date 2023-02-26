import { expect, test } from '@playwright/test';
import { getFormattedDateLong } from './getFormattedDateLong';
import { TimeZone } from './types/TimeZone';

test.describe.configure({ mode: 'parallel' });

const timeZone: TimeZone = 'Asia/Manila';

test('returns "21. Februar 2023"', async () => {
  const timestamp = 1676983604423;

  const formattedDateLong = getFormattedDateLong({
    timestamp,
    options: {
      timeZone,
    },
  });

  expect(formattedDateLong).toBe('21. Februar 2023');
});
