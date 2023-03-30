import { expect, test } from '@playwright/test';
import { getRandomStringCustom } from './getRandomStringCustom';

test.describe.configure({ mode: 'parallel' });

test('returns random string with 10 characters length and only containing abcDEF123', async () => {
  const length = 10;
  const allowedChars = 'abcDEF123';

  const randomStringCustom = getRandomStringCustom({ length, allowedChars });

  expect(randomStringCustom).not.toBeNull();
  expect(randomStringCustom).not.toBeUndefined();
  expect(randomStringCustom).toHaveLength(length);

  const randomStringCharacters = randomStringCustom.split('');

  randomStringCharacters.forEach((character: string) => {
    expect(allowedChars.includes(character)).toBeTruthy();
  });
});

test('returns random string with 10 characters length and only containing a', async () => {
  const length = 10;
  const allowedChars = 'a';

  const randomStringCustom = getRandomStringCustom({ length, allowedChars });

  expect(randomStringCustom).not.toBeNull();
  expect(randomStringCustom).not.toBeUndefined();
  expect(randomStringCustom).toHaveLength(length);
  expect(randomStringCustom).toBe('aaaaaaaaaa');
});
