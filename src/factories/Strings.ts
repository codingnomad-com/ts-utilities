import { IObfuscateEmailConfig } from '~/strings/interfaces/IObfuscateEmailConfig';
import { isBlank } from '~/strings/isBlank';
import { isDouble } from '~/strings/isDouble';
import { isEmpty } from '~/strings/isEmpty';
import { isInteger } from '~/strings/isInteger';
import { isNotBlank } from '~/strings/isNotBlank';
import { isNotEmpty } from '~/strings/isNotEmpty';
import { obfuscateEmail } from '~/strings/obfuscateEmail';
import { removeNonNumeric } from '~/strings/removeNonNumeric';
import { slugify } from '~/strings/slugify';
import { IStrings } from './interfaces/IStrings';

export const Strings = (): IStrings => ({
  isBlank: (value?: string | null) => isBlank(value),
  isDouble: (value?: string | null) => isDouble(value),
  isEmpty: (value?: string | null) => isEmpty(value),
  isInteger: (value?: string | null) => isInteger(value),
  isNotBlank: (value?: string | null) => isNotBlank(value),
  isNotEmpty: (value?: string | null) => isNotEmpty(value),
  obfuscateEmail: (email: string, config: IObfuscateEmailConfig) =>
    obfuscateEmail(email, config),
  removeNonNumeric: (value?: string | null) => removeNonNumeric(value),
  slugify: (value?: string | null) => slugify(value),
});
