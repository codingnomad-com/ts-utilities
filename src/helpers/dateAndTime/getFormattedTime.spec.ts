import { expect, test } from '@playwright/test';
import { getFormattedTime } from './getFormattedTime';
import { TimeZone } from './types/TimeZone';

test.describe.configure({ mode: 'parallel' });

const timeZone: TimeZone = 'Asia/Manila';

test('returns "20:46"', async () => {
  const timestamp = 1676983604423;

  const formattedTime = getFormattedTime({
    timestamp,
    options: {
      timeZone,
    },
  });

  expect(formattedTime).toBe('20:46');
});
