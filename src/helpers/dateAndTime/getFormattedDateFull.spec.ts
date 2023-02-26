import { expect, test } from '@playwright/test';
import { getFormattedDateFull } from './getFormattedDateFull';
import { TimeZone } from './types/TimeZone';

test.describe.configure({ mode: 'parallel' });

const timeZone: TimeZone = 'Asia/Manila';

test('returns "Dienstag, 21. Februar 2023"', async () => {
  const timestamp = 1676983604423;

  const formattedDateFull = getFormattedDateFull({
    timestamp,
    options: {
      timeZone,
    },
  });

  expect(formattedDateFull).toBe('Dienstag, 21. Februar 2023');
});
