import { expect, test } from '@playwright/test';
import { obfuscateEmail } from './obfuscateEmail';

test.describe.configure({ mode: 'parallel' });

test('returns undefined if email is empty', async () => {
  const email = '';

  const obfuscatedEmail = obfuscateEmail(email);

  expect(obfuscatedEmail).toBeUndefined();
});

test('returns undefined if email does not conatain @', async () => {
  const email = 'hello.coding-nomad.com';

  const obfuscatedEmail = obfuscateEmail(email);

  expect(obfuscatedEmail).toBeUndefined();
});

test('returns "h***@coding-nomad.com"', async () => {
  const email = 'hello@coding-nomad.com';

  const obfuscatedEmail = obfuscateEmail(email);

  expect(obfuscatedEmail).toBe('h***@coding-nomad.com');
});

test('returns "h***@coding-nomad.com" even when options object is empty', async () => {
  const email = 'hello@coding-nomad.com';

  const obfuscatedEmail = obfuscateEmail(email, {});

  expect(obfuscatedEmail).toBe('h***@coding-nomad.com');
});

test('returns "h***@cod***.com"', async () => {
  const email = 'hello@coding-nomad.com';
  const config = {
    obfuscateDomainname: true,
  };

  const obfuscatedEmail = obfuscateEmail(email, config);

  expect(obfuscatedEmail).toBe('h***@cod***.com');
});

test('returns "hello@cod***.com"', async () => {
  const email = 'hello@coding-nomad.com';
  const config = {
    obfuscateUsername: false,
    obfuscateDomainname: true,
  };

  const obfuscatedEmail = obfuscateEmail(email, config);

  expect(obfuscatedEmail).toBe('hello@cod***.com');
});

test('returns "he***@coding***.com"', async () => {
  const email = 'hello@coding-nomad.com';
  const config = {
    obfuscateDomainname: true,
    visibleCharsOfUsername: 2,
    visibleCharsOfDomainname: 6,
  };

  const obfuscatedEmail = obfuscateEmail(email, config);

  expect(obfuscatedEmail).toBe('he***@coding***.com');
});

test('returns full email when the number of visible characters is greater than the number of characters in the email', () => {
  const email = 'hello@coding-nomad.com';
  const config = {
    obfuscateDomainname: true,
    visibleCharsOfUsername: 10,
    visibleCharsOfDomainname: 20,
  };

  const obfuscatedEmail = obfuscateEmail(email, config);

  expect(obfuscatedEmail).toBe('hello@coding-nomad.com');
});
