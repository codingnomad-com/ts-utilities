import { expect, test } from '@playwright/test';
import getFormattedNumber from './getFormattedNumber';
import { FormattedNumberOptionsType } from './types/FormattedNumberOptionsType';

test.describe.configure({ mode: 'parallel' });

test('returns "12.235,53"', async () => {
  const value = 12235.53;

  const options = {};

  const formattedNumber = getFormattedNumber({
    value,
    options,
  });

  expect(formattedNumber).toBe('12.235,53');
});

test('returns "12235.53"', async () => {
  const value = 12235.53;

  const options: FormattedNumberOptionsType = {
    useGrouping: false,
    locale: 'en-US',
  };

  const formattedNumber = getFormattedNumber({
    value,
    options,
  });

  expect(formattedNumber).toBe('12235.53');
});

test('returns "12,235.53"', async () => {
  const value = 12235.53;

  const options: FormattedNumberOptionsType = {
    locale: 'en-US',
  };

  const formattedNumber = getFormattedNumber({
    value,
    options,
  });

  expect(formattedNumber).toBe('12,235.53');
});
