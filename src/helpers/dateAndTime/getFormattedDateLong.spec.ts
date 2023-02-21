import { expect, test } from '@playwright/test';
import getFormattedDateLong from './getFormattedDateLong';

test.describe.configure({ mode: 'parallel' });

test('returns "21. Februar 2023"', async () => {
  const timestamp = 1676983604423;

  const formattedDateLong = getFormattedDateLong({
    timestamp,
  });

  expect(formattedDateLong).toBe('21. Februar 2023');
});
