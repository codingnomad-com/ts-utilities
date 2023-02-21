import { expect, test } from '@playwright/test';
import getFormattedPercent from './getFormattedPercent';
import { FormattedPercentOptionsType } from './types/FormattedPercentOptionsType';

test.describe.configure({ mode: 'parallel' });

test('returns "12.235,53 %"', async () => {
  const value = 12235.53;

  const options = {};

  const formattedPercent = getFormattedPercent({
    value,
    options,
  });

  expect(formattedPercent).toBe('12.235,53 %');
});

test('returns "12235.53%"', async () => {
  const value = 12235.53;

  const options: FormattedPercentOptionsType = {
    useGrouping: false,
    locale: 'en-US',
  };

  const formattedPercent = getFormattedPercent({
    value,
    options,
  });

  expect(formattedPercent).toBe('12235.53%');
});

test('returns "12,235.53%"', async () => {
  const value = 12235.53;

  const options: FormattedPercentOptionsType = { locale: 'en-US' };

  const formattedPercent = getFormattedPercent({
    value,
    options,
  });

  expect(formattedPercent).toBe('12,235.53%');
});
