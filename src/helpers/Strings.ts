import { ObfuscateEmailConfig } from '~/strings/interfaces/ObfuscateEmailConfig';
import { isBlank } from '~/strings/isBlank';
import { isDouble } from '~/strings/isDouble';
import { isEmpty } from '~/strings/isEmpty';
import { isInteger } from '~/strings/isInteger';
import { isNotBlank } from '~/strings/isNotBlank';
import { isNotEmpty } from '~/strings/isNotEmpty';
import { obfuscateEmail } from '~/strings/obfuscateEmail';
import { removeNonNumeric } from '~/strings/removeNonNumeric';
import { slugify } from '~/strings/slugify';
import { StringsInterface } from './interfaces/StringsInterface';

export const Strings = (): StringsInterface => ({
  isBlank: (value?: string | null) => isBlank(value),
  isDouble: (value?: string | null) => isDouble(value),
  isEmpty: (value?: string | null) => isEmpty(value),
  isInteger: (value?: string | null) => isInteger(value),
  isNotBlank: (value?: string | null) => isNotBlank(value),
  isNotEmpty: (value?: string | null) => isNotEmpty(value),
  obfuscateEmail: (email: string, config: ObfuscateEmailConfig) =>
    obfuscateEmail(email, config),
  removeNonNumeric: (value?: string | null) => removeNonNumeric(value),
  slugify: (value?: string | null) => slugify(value),
});
