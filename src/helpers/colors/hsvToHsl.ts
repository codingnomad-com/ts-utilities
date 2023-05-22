// RETURNS: [210, 0.6, 0.24] // hsvToHsl([210, 0.75, 0.375]);

import { ColorHSL } from './types/ColorHSL';
import { ColorHSV } from './types/ColorHSV';

export const hsvToHsl = ([h, s, v]: ColorHSV): ColorHSL => {
  const l = v - (v * s) / 2;

  const newS = l === 0 || l === 1 ? 0 : (v - l) / Math.min(l, 1 - l);

  return [h % 360, newS, l];
};

export default hsvToHsl;
