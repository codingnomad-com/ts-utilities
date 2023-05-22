import { Maybe } from '~/types/Maybe';
import { IObfuscateEmailConfig } from './interfaces/IObfuscateEmailConfig';

// RETURNS: hel***@cod***.com
// RETURNS: hel***@coding-nomad.com
// RETURNS: hello@cod***.com

export const obfuscateEmail = (
  email: string,
  config: IObfuscateEmailConfig = {
    obfuscateUsername: true,
    obfuscateDomainname: false,
    visibleCharsOfUsername: 1,
    visibleCharsOfDomainname: 3,
  },
): Maybe<string> => {
  const {
    obfuscateUsername = true,
    obfuscateDomainname = false,
    visibleCharsOfUsername = 1,
    visibleCharsOfDomainname = 3,
  } = config;

  if (email && email.includes('@')) {
    const emailParts = email.split('@');
    const domainParts = emailParts[1].split('.');

    let username = emailParts[0];
    let domainname = domainParts[0];
    const extension = domainParts[1];

    if (obfuscateUsername && username.length > visibleCharsOfUsername) {
      username = `${username.substring(0, visibleCharsOfUsername)}***`;
    }

    if (obfuscateDomainname && domainname.length > visibleCharsOfDomainname) {
      domainname = `${domainname.substring(0, visibleCharsOfDomainname)}***`;
    }

    return `${username}@${domainname}.${extension}`;
  }

  return undefined;
};

export default obfuscateEmail;
