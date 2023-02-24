import { expect, test } from '@playwright/test';
import { getFormattedAddress } from './getFormattedAddress';

test.describe.configure({ mode: 'parallel' });

test('returns "Augsburger Straße 27, 58452 Witten"', async () => {
  const address = {
    street: 'Augsburger Straße',
    streetNumber: '27',
    zipCode: '58452',
    city: 'Witten',
  };

  const formattedAddress = getFormattedAddress({ address });

  expect(formattedAddress).toBe('Augsburger Straße 27, 58452 Witten');
});

test('returns "Augsburger Straße, 58452 Witten"', async () => {
  const address = {
    street: 'Augsburger Straße',
    zipCode: '58452',
    city: 'Witten',
  };

  const formattedAddress = getFormattedAddress({ address });

  expect(formattedAddress).toBe('Augsburger Straße, 58452 Witten');
});

test('returns "Augsburger Straße, Witten"', async () => {
  const address = {
    street: 'Augsburger Straße',
    city: 'Witten',
  };

  const formattedAddress = getFormattedAddress({ address });

  expect(formattedAddress).toBe('Augsburger Straße, Witten');
});

test('returns "Augsburger Straße 27, Witten"', async () => {
  const address = {
    street: 'Augsburger Straße',
    streetNumber: '27',
    city: 'Witten',
  };

  const formattedAddress = getFormattedAddress({ address });

  expect(formattedAddress).toBe('Augsburger Straße 27, Witten');
});

test('returns "Augsburger Straße 27"', async () => {
  const address = {
    street: 'Augsburger Straße',
    streetNumber: '27',
    zipCode: '58452',
  };

  const formattedAddress = getFormattedAddress({ address });

  expect(formattedAddress).toBe('Augsburger Straße 27');
});

test('returns "Augsburger Straße"', async () => {
  const address = {
    street: 'Augsburger Straße',
    zipCode: '58452',
  };

  const formattedAddress = getFormattedAddress({ address });

  expect(formattedAddress).toBe('Augsburger Straße');
});

test('returns "58452 Witten"', async () => {
  const address = {
    zipCode: '58452',
    city: 'Witten',
  };

  const formattedAddress = getFormattedAddress({ address });

  expect(formattedAddress).toBe('58452 Witten');
});

test('returns "Witten"', async () => {
  const address = {
    city: 'Witten',
  };

  const formattedAddress = getFormattedAddress({ address });

  expect(formattedAddress).toBe('Witten');
});
