import { expect, test } from '@playwright/test';
import { getFormattedTime } from './getFormattedTime';

test.describe.configure({ mode: 'parallel' });

test('returns "20:46"', async () => {
  const timestamp = 1676983604423;

  const formattedTime = getFormattedTime({
    timestamp,
  });

  expect(formattedTime).toBe('20:46');
});
