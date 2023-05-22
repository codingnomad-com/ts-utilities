import { expect, test } from '@playwright/test';
import { getTimestamp } from './getTimestamp';

test.describe.configure({ mode: 'parallel' });

test('returns number', async () => {
  const timestamp = getTimestamp();

  expect(timestamp).not.toBeNaN();
});
