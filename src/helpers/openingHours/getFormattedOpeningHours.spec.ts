import { expect, test } from '@playwright/test';
import { getFormattedOpeningHours } from './getFormattedOpeningHours';
import { openingHours } from './mock/openingHours';

test.describe.configure({ mode: 'parallel' });

test('returns formatted opening hours in english with short weekdays without spaces', async () => {
  const locale = 'en-US';
  const shortWeekdays = true;

  const formattedOpeningHours = getFormattedOpeningHours({
    locale,
    openingHours,
    shortWeekdays,
  });

  expect(formattedOpeningHours).toHaveLength(3);
  expect(formattedOpeningHours[0].days).toBe('Mon & Tue');
  expect(formattedOpeningHours[1].days).toBe('Wed');
  expect(formattedOpeningHours[2].days).toBe('Thu-Sat');
});

test('returns formatted opening hours in english with long weekdays without spaces', async () => {
  const locale = 'en-US';

  const formattedOpeningHours = getFormattedOpeningHours({
    locale,
    openingHours,
  });

  expect(formattedOpeningHours).toHaveLength(3);
  expect(formattedOpeningHours[0].days).toBe('Monday & Tuesday');
  expect(formattedOpeningHours[1].days).toBe('Wednesday');
  expect(formattedOpeningHours[2].days).toBe('Thursday-Saturday');
});

test('returns formatted opening hours in english with short weekdays with spaces', async () => {
  const locale = 'en-US';
  const shortWeekdays = true;
  const withSpaces = true;

  const formattedOpeningHours = getFormattedOpeningHours({
    locale,
    openingHours,
    shortWeekdays,
    withSpaces,
  });

  expect(formattedOpeningHours).toHaveLength(3);
  expect(formattedOpeningHours[0].days).toBe('Mon & Tue');
  expect(formattedOpeningHours[1].days).toBe('Wed');
  expect(formattedOpeningHours[2].days).toBe('Thu - Sat');
});

test('returns formatted opening hours in english with long weekdays with spaces', async () => {
  const locale = 'en-US';
  const withSpaces = true;

  const formattedOpeningHours = getFormattedOpeningHours({
    locale,
    openingHours,
    withSpaces,
  });

  expect(formattedOpeningHours).toHaveLength(3);
  expect(formattedOpeningHours[0].days).toBe('Monday & Tuesday');
  expect(formattedOpeningHours[1].days).toBe('Wednesday');
  expect(formattedOpeningHours[2].days).toBe('Thursday - Saturday');
});

test('returns formatted opening hours in german with short weekdays without spaces', async () => {
  const locale = 'de-DE';
  const shortWeekdays = true;

  const formattedOpeningHours = getFormattedOpeningHours({
    locale,
    openingHours,
    shortWeekdays,
  });

  expect(formattedOpeningHours).toHaveLength(3);
  expect(formattedOpeningHours[0].days).toBe('Mo & Di');
  expect(formattedOpeningHours[1].days).toBe('Mi');
  expect(formattedOpeningHours[2].days).toBe('Do-Sa');
});

test('returns formatted opening hours in german with long weekdays without spaces', async () => {
  const locale = 'de-DE';

  const formattedOpeningHours = getFormattedOpeningHours({
    locale,
    openingHours,
  });

  expect(formattedOpeningHours).toHaveLength(3);
  expect(formattedOpeningHours[0].days).toBe('Montag & Dienstag');
  expect(formattedOpeningHours[1].days).toBe('Mittwoch');
  expect(formattedOpeningHours[2].days).toBe('Donnerstag-Samstag');
});

test('returns formatted opening hours in german with short weekdays with spaces', async () => {
  const locale = 'de-DE';
  const shortWeekdays = true;
  const withSpaces = true;

  const formattedOpeningHours = getFormattedOpeningHours({
    locale,
    openingHours,
    shortWeekdays,
    withSpaces,
  });

  expect(formattedOpeningHours).toHaveLength(3);
  expect(formattedOpeningHours[0].days).toBe('Mo & Di');
  expect(formattedOpeningHours[1].days).toBe('Mi');
  expect(formattedOpeningHours[2].days).toBe('Do - Sa');
});

test('returns formatted opening hours in german with long weekdays with spaces', async () => {
  const locale = 'de-DE';
  const withSpaces = true;

  const formattedOpeningHours = getFormattedOpeningHours({
    locale,
    openingHours,
    withSpaces,
  });

  expect(formattedOpeningHours).toHaveLength(3);
  expect(formattedOpeningHours[0].days).toBe('Montag & Dienstag');
  expect(formattedOpeningHours[1].days).toBe('Mittwoch');
  expect(formattedOpeningHours[2].days).toBe('Donnerstag - Samstag');
});
