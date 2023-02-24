import { expect, test } from '@playwright/test';
import { IsoCodeType } from '../../data/countries/types/IsoCodeType';
import { getDialCode } from './getDialCode';

test.describe.configure({ mode: 'parallel' });

test('returns "+49"', async () => {
  const isoCode: IsoCodeType = 'DE';

  const dialCode = getDialCode(isoCode);

  expect(dialCode).toBe('+49');
});

test('returns "+93"', async () => {
  const isoCode: IsoCodeType = 'AF';

  const dialCode = getDialCode(isoCode);

  expect(dialCode).toBe('+93');
});

test('returns "+32"', async () => {
  const isoCode: IsoCodeType = 'BE';

  const dialCode = getDialCode(isoCode);

  expect(dialCode).toBe('+32');
});

test('returns "+1"', async () => {
  const isoCode: IsoCodeType = 'US';

  const dialCode = getDialCode(isoCode);

  expect(dialCode).toBe('+1');
});

test('returns "+44"', async () => {
  const isoCode: IsoCodeType = 'GB';

  const dialCode = getDialCode(isoCode);

  expect(dialCode).toBe('+44');
});
