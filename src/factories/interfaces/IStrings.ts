import { IObfuscateEmailConfig } from '~/strings/interfaces/IObfuscateEmailConfig';
import { Maybe } from '~/types/Maybe';

export interface IStrings {
  isBlank: (value?: string | null) => boolean;
  isDouble: (value?: string | null) => boolean;
  isEmpty: (value?: string | null) => boolean;
  isInteger: (value?: string | null) => boolean;
  isNotBlank: (value?: string | null) => boolean;
  isNotEmpty: (value?: string | null) => boolean;
  obfuscateEmail: (
    email: string,
    config: IObfuscateEmailConfig,
  ) => Maybe<string>;
  removeNonNumeric: (value?: string | null) => Maybe<string>;
  slugify: (value?: string | null) => Maybe<string>;
}
