import { expect, test } from '@playwright/test';
import getFormattedDateFull from './getFormattedDateFull';

test.describe.configure({ mode: 'parallel' });

test('returns "Dienstag, 21. Februar 2023"', async () => {
  const timestamp = 1676983604423;

  const formattedDateFull = getFormattedDateFull({
    timestamp,
  });

  expect(formattedDateFull).toBe('Dienstag, 21. Februar 2023');
});
