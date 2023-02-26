import { expect, test } from '@playwright/test';
import { getFormattedDateRange } from './getFormattedDateRange';
import { DayFormatType } from './types/DayFormatType';
import { TimeZone } from './types/TimeZone';

test.describe.configure({ mode: 'parallel' });

const timeZone: TimeZone = 'Asia/Manila';

test('returns "21.02.2023"', async () => {
  const startDate = 1676983604423;

  const dateNormalOptions = {
    dayFormat: '2-digit' as DayFormatType,
    timeZone,
  };

  const formattedDateRange = getFormattedDateRange({
    startDate,
    dateNormalOptions,
  });

  expect(formattedDateRange).toBe('21.02.2023');
});

test('returns "21.02.2023, 20:46"', async () => {
  const startDate = 1676983604423;

  const dateNormalOptions = {
    dayFormat: '2-digit' as DayFormatType,
    timeZone,
  };

  const formattedDateRange = getFormattedDateRange({
    startDate,
    dateNormalOptions,
    withTime: true,
  });

  expect(formattedDateRange).toBe('21.02.2023, 20:46');
});

test('returns "21.02.2023, 20:46 - 21:03"', async () => {
  const startDate = 1676983604423;
  const endDate = 1676984594423;

  const dateNormalOptions = {
    dayFormat: '2-digit' as DayFormatType,
    timeZone,
  };

  const formattedDateRange = getFormattedDateRange({
    startDate,
    endDate,
    dateNormalOptions,
    withTime: true,
  });

  expect(formattedDateRange).toBe('21.02.2023, 20:46 - 21:03');
});

test('returns "21.02.2023 - 17.06.2023"', async () => {
  const startDate = 1676983604423;
  const endDate = 1686983604423;

  const dateNormalOptions = {
    dayFormat: '2-digit' as DayFormatType,
    timeZone,
  };

  const formattedDateRange = getFormattedDateRange({
    startDate,
    endDate,
    dateNormalOptions,
    withTime: true,
  });

  expect(formattedDateRange).toBe('21.02.2023 - 17.06.2023');
});
