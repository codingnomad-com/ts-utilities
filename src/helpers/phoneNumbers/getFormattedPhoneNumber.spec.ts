import { expect, test } from '@playwright/test';
import { IsoCodeType } from '../../data/countries/types/IsoCodeType';
import { getFormattedPhoneNumber } from './getFormattedPhoneNumber';

test.describe.configure({ mode: 'parallel' });

test('returns "+49 711 123456"', async () => {
  const countryCode: IsoCodeType = 'DE';
  const areaCode = '0711';
  const number = '123456';

  const dialCode = getFormattedPhoneNumber({ areaCode, countryCode, number });

  expect(dialCode).toBe('+49 711 123456');
});

test('returns "+49 (0) 711 123456"', async () => {
  const countryCode: IsoCodeType = 'DE';
  const areaCode = '0711';
  const number = '123456';

  const dialCode = getFormattedPhoneNumber({
    areaCode,
    countryCode,
    number,
    showZero: true,
  });

  expect(dialCode).toBe('+49 (0) 711 123456');
});

test('returns "+63 711 123456"', async () => {
  const countryCode: IsoCodeType = 'PH';
  const areaCode = '0711';
  const number = '123456';

  const dialCode = getFormattedPhoneNumber({ areaCode, countryCode, number });

  expect(dialCode).toBe('+63 711 123456');
});
