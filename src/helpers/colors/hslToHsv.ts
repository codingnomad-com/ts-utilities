// RETURNS: [210, 0.75, 0.375] // hslToHsv([210, 0.6, 0.24]);

import { ColorHSL } from './types/ColorHSL';
import { ColorHSV } from './types/ColorHSV';

export const hslToHsv = ([h, s, l]: ColorHSL): ColorHSV => {
  const v = l + s * Math.min(l, 1 - l);

  const newS = v === 0 ? 0 : 2 - (2 * l) / v;

  return [h % 360, newS, v];
};

export default hslToHsv;
