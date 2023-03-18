export interface GetRandomStringProps {
  /**
   * length of the string to be generated
   *
   * @default 16
   */
  length?: number;
  /**
   * should include upper case caracteres?
   *
   * @example
   * ABCDEF...
   *
   * @default true
   */
  uppercase?: boolean;
  /**
   * should include lower case caracteres?
   *
   * @example
   * abcdef...
   *
   * @default true
   */
  lowercase?: boolean;
  /**
   * should include numbers?
   *
   * @example
   * 0123456789
   *
   * @default true
   */
  numbers?: boolean;
  /**
   * should include special caracteres simple?
   *
   * @example
   * !#$%&*_+=-^~?;:.,|
   *
   * @default true
   */
  specialSimple?: boolean;
  /**
   * should include special caracteres ambiguous?
   *
   * @example
   * "()'`´{[]}/><
   *
   * @default true
   */
  specialAmbiguous?: boolean;
}
