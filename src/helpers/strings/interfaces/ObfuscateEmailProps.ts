export interface ObfuscateEmailProps {
  /**
   * obfuscates the username of the email
   *
   * @default true
   */
  obfuscateUsername?: boolean;

  /**
   * obfuscates the domainname of the email
   *
   * @default false
   */
  obfuscateDomainname?: boolean;

  /**
   * number of characters visible at the username of the email
   *
   * @default 1
   */
  visibleCharsOfUsername?: number;

  /**
   * number of characters visible at the domainname of the email
   *
   * @default 3
   */
  visibleCharsOfDomainname?: number;
}
