import { expect, test } from '@playwright/test';
import { obfuscateEmail } from './obfuscateEmail';

test.describe.configure({ mode: 'parallel' });

test('returns undefined if email is null', async () => {
  const obfuscatedEmail = obfuscateEmail(null);

  expect(obfuscatedEmail).toBeUndefined();
});

test('returns undefined if email is undefined', async () => {
  const obfuscatedEmail = obfuscateEmail();

  expect(obfuscatedEmail).toBeUndefined();
});

test('returns undefined if email is empty', async () => {
  const obfuscatedEmail = obfuscateEmail('');

  expect(obfuscatedEmail).toBeUndefined();
});

test('returns undefined if email does not conatain @', async () => {
  const obfuscatedEmail = obfuscateEmail('hello.coding-nomad.com');

  expect(obfuscatedEmail).toBeUndefined();
});

test('returns "h***@coding-nomad.com"', async () => {
  const obfuscatedEmail = obfuscateEmail('hello@coding-nomad.com');

  expect(obfuscatedEmail).toBe('h***@coding-nomad.com');
});

test('returns "h***@coding-nomad.com" even when options object is empty', async () => {
  const obfuscatedEmail = obfuscateEmail('hello@coding-nomad.com', {});

  expect(obfuscatedEmail).toBe('h***@coding-nomad.com');
});

test('returns "h***@cod***.com"', async () => {
  const obfuscatedEmail = obfuscateEmail('hello@coding-nomad.com', {
    obfuscateDomainname: true,
  });

  expect(obfuscatedEmail).toBe('h***@cod***.com');
});

test('returns "hello@cod***.com"', async () => {
  const obfuscatedEmail = obfuscateEmail('hello@coding-nomad.com', {
    obfuscateUsername: false,
    obfuscateDomainname: true,
  });

  expect(obfuscatedEmail).toBe('hello@cod***.com');
});

test('returns "he***@coding***.com"', async () => {
  const obfuscatedEmail = obfuscateEmail('hello@coding-nomad.com', {
    obfuscateDomainname: true,
    visibleCharsOfUsername: 2,
    visibleCharsOfDomainname: 6,
  });

  expect(obfuscatedEmail).toBe('he***@coding***.com');
});

test('returns full email when the number of visible characters is greater than the number of characters in the email', () => {
  const obfuscatedEmail = obfuscateEmail('hello@coding-nomad.com', {
    obfuscateDomainname: true,
    visibleCharsOfUsername: 10,
    visibleCharsOfDomainname: 20,
  });

  expect(obfuscatedEmail).toBe('hello@coding-nomad.com');
});
