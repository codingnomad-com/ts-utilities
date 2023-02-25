import { expect, test } from '@playwright/test';
import { getWeekdaysForLocale } from './getWeekdaysForLocale';

test.describe.configure({ mode: 'parallel' });

test('returns array of all weekdays in german (short), starting with "Mo"', async () => {
  const locale = 'de-DE';
  const short = true;

  const weekdays = getWeekdaysForLocale({
    locale,
    short,
  });

  expect(weekdays).toHaveLength(7);
  expect(weekdays).toContain('Do');
  expect(weekdays[0]).toBe('Mo');
});

test('returns array of all weekdays in german (long), starting with "Montag"', async () => {
  const locale = 'de-DE';
  const short = false;

  const weekdays = getWeekdaysForLocale({
    locale,
    short,
  });

  expect(weekdays).toHaveLength(7);
  expect(weekdays).toContain('Mittwoch');
  expect(weekdays[0]).toBe('Montag');
});

test('returns array of all weekdays in english (short), starting with "Mon"', async () => {
  const locale = 'en-US';
  const short = true;

  const weekdays = getWeekdaysForLocale({
    locale,
    short,
  });

  expect(weekdays).toHaveLength(7);
  expect(weekdays).toContain('Sun');
  expect(weekdays[0]).toBe('Mon');
});

test('returns array of all weekdays in english (long), starting with "Monday"', async () => {
  const locale = 'en-US';
  const short = false;

  const weekdays = getWeekdaysForLocale({
    locale,
    short,
  });

  expect(weekdays).toHaveLength(7);
  expect(weekdays).toContain('Friday');
  expect(weekdays[0]).toBe('Monday');
});
