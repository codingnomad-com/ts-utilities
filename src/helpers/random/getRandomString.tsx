// RETURNS: 76V|4E"}V7ozz]_0
// RETURNS: 575733057608825077018035097826
// RETURNS: TXSFHNZZLTXXHOVLBAZQXTLDDIODCI
// RETURNS: vexrplzyrvqeslfnfpmyfipiqgzgmh
// RETURNS: [<(//}>[}>(>)>{{>'<)}"<<)//["[
// RETURNS: :~#!#%,%!:-!^$;~=^*:+|=_,&|~-=

import { getRandomStringCustom } from './getRandomStringCustom';
import { GetRandomStringProps } from './interfaces/GetRandomStringProps';

export const uppercasecaseChars = 'ABCDEFGHIKLMNOPQRSTVXYZ';
export const lowercasecaseChars = 'abcdefghiklmnopqrstvxyz';
export const numbersChars = '0123456789';
export const specialSimpleChars = '!#$%&*_+=-^~?;:.,|';
export const specialAmbiguousChars = '"()\'{[]}/><';

export const getRandomString = (
  config: GetRandomStringProps = {
    length: 16,
    uppercase: true,
    lowercase: true,
    numbers: true,
    specialSimple: true,
    specialAmbiguous: true,
  },
): string => {
  const length = config.length ?? 16;
  const uppercase = config.uppercase ?? true;
  const lowercase = config.lowercase ?? true;
  const numbers = config.numbers ?? true;
  const specialSimple = config.specialSimple ?? true;
  const specialAmbiguous = config.specialAmbiguous ?? true;

  let allowedChars = '';
  if (uppercase) allowedChars += uppercasecaseChars;
  if (lowercase) allowedChars += lowercasecaseChars;
  if (numbers) allowedChars += numbersChars;
  if (specialSimple) allowedChars += specialSimpleChars;
  if (specialAmbiguous) allowedChars += specialAmbiguousChars;

  return getRandomStringCustom(length, allowedChars);
};
