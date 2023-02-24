import { expect, test } from '@playwright/test';
import { getFormattedCurrency } from './getFormattedCurrency';
import { FormattedCurrencyOptionsType } from './types/FormattedCurrencyOptionsType';

test.describe.configure({ mode: 'parallel' });

test('returns "12.235,53 €"', async () => {
  const value = 12235.53;

  const options: FormattedCurrencyOptionsType = {};

  const formattedCurrency = getFormattedCurrency({
    value,
    options,
  });

  expect(formattedCurrency).toBe('12.235,53 €');
});

test('returns "12.235,53 EUR"', async () => {
  const value = 12235.53;

  const options: FormattedCurrencyOptionsType = {
    currencyDisplay: 'code',
  };

  const formattedCurrency = getFormattedCurrency({
    value,
    options,
  });

  expect(formattedCurrency).toBe('12.235,53 EUR');
});

test('returns "12.235,53 Euro"', async () => {
  const value = 12235.53;

  const options: FormattedCurrencyOptionsType = {
    currencyDisplay: 'name',
  };

  const formattedCurrency = getFormattedCurrency({
    value,
    options,
  });

  expect(formattedCurrency).toBe('12.235,53 Euro');
});

test('returns "$12,235.53"', async () => {
  const value = 12235.53;

  const options: FormattedCurrencyOptionsType = {
    currency: 'USD',
    locale: 'en-US',
  };

  const formattedCurrency = getFormattedCurrency({
    value,
    options,
  });

  expect(formattedCurrency).toBe('$12,235.53');
});

test('returns "USD 12,235.53"', async () => {
  const value = 12235.53;

  const options: FormattedCurrencyOptionsType = {
    currency: 'USD',
    currencyDisplay: 'code',
    locale: 'en-US',
  };

  const formattedCurrency = getFormattedCurrency({
    value,
    options,
  });

  expect(formattedCurrency).toBe('USD 12,235.53');
});

test('returns "12,235.53 US dollars"', async () => {
  const value = 12235.53;

  const options: FormattedCurrencyOptionsType = {
    currency: 'USD',
    currencyDisplay: 'name',
    locale: 'en-US',
  };

  const formattedCurrency = getFormattedCurrency({
    value,
    options,
  });

  expect(formattedCurrency).toBe('12,235.53 US dollars');
});
