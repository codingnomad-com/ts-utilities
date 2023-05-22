import { expect, test } from '@playwright/test';
import { getRandomString } from './getRandomString';
import { IGetRandomStringProps } from './interfaces/IGetRandomStringProps';

test.describe.configure({ mode: 'parallel' });

test('returns random string with length 16 by default', async () => {
  const randomString = getRandomString();

  expect(randomString).not.toBeNull();
  expect(randomString).not.toBeUndefined();
  expect(randomString).toHaveLength(16);
});

test('returns random string with length 16 by default if no length passed to props', async () => {
  const randomString = getRandomString({ specialSimple: false });

  expect(randomString).not.toBeNull();
  expect(randomString).not.toBeUndefined();
  expect(randomString).toHaveLength(16);
});

test('returns random string with length 30 with only uppercase characters', async () => {
  const props: IGetRandomStringProps = {
    length: 30,
    lowercase: false,
    numbers: false,
    specialSimple: false,
    specialAmbiguous: false,
  };

  const randomString = getRandomString(props);

  expect(randomString).not.toBeNull();
  expect(randomString).not.toBeUndefined();
  expect(randomString).toHaveLength(30);
  expect(/^[A-Z]+$/.test(randomString)).toBeTruthy();
});

test('returns random string with length 30 with only lowercase characters', async () => {
  const props: IGetRandomStringProps = {
    length: 30,
    uppercase: false,
    numbers: false,
    specialSimple: false,
    specialAmbiguous: false,
  };

  const randomString = getRandomString(props);

  expect(randomString).not.toBeNull();
  expect(randomString).not.toBeUndefined();
  expect(randomString).toHaveLength(30);
  expect(/^[a-z]+$/.test(randomString)).toBeTruthy();
});

test('returns random string with length 30 with only numbers', async () => {
  const props: IGetRandomStringProps = {
    length: 30,
    uppercase: false,
    lowercase: false,
    specialSimple: false,
    specialAmbiguous: false,
  };

  const randomString = getRandomString(props);

  expect(randomString).not.toBeNull();
  expect(randomString).not.toBeUndefined();
  expect(randomString).toHaveLength(30);
  expect(/^[\d]+$/.test(randomString)).toBeTruthy();
});

test('returns random string with length 30 with only simple special chars', async () => {
  const props: IGetRandomStringProps = {
    length: 30,
    uppercase: false,
    lowercase: false,
    numbers: false,
    specialAmbiguous: false,
  };

  const randomString = getRandomString(props);

  expect(randomString).not.toBeNull();
  expect(randomString).not.toBeUndefined();
  expect(randomString).toHaveLength(30);
  expect(/^[!#$%&*_+=\-^~?;:.,|]+$/.test(randomString)).toBeTruthy();
});

test('returns random string with length 30 with only ambigous special chars', async () => {
  const props: IGetRandomStringProps = {
    length: 30,
    uppercase: false,
    lowercase: false,
    numbers: false,
    specialSimple: false,
  };

  const randomString = getRandomString(props);

  expect(randomString).not.toBeNull();
  expect(randomString).not.toBeUndefined();
  expect(randomString).toHaveLength(30);
  expect(/^["()'{[\]}/><]+$/.test(randomString)).toBeTruthy();
});
