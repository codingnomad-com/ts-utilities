import { expect, test } from '@playwright/test';
import { compareCaseInsensitive } from './compareCaseInsensitive';

test.describe.configure({ mode: 'parallel' });

test('returns true if matching strings with matching cases', async () => {
  const string1 = 'This is a test string';
  const string2 = 'This is a test string';

  const isEqual = compareCaseInsensitive(string1, string2);

  expect(isEqual).toBeTruthy();
});

test('returns true if matching strings with non matching cases', async () => {
  const string1 = 'This is a test string';
  const string2 = 'This is A test STRING';

  const isEqual = compareCaseInsensitive(string1, string2);

  expect(isEqual).toBeTruthy();
});

test('returns false if non matching strings with matching cases', async () => {
  const string1 = 'This is a test string';
  const string2 = 'This is another test string';

  const isEqual = compareCaseInsensitive(string1, string2);

  expect(isEqual).toBeFalsy();
});

test('returns false if non matching strings with non matching cases', async () => {
  const string1 = 'This is a test string';
  const string2 = 'This is ANOTHER test string';

  const isEqual = compareCaseInsensitive(string1, string2);

  expect(isEqual).toBeFalsy();
});
