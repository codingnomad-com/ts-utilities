// RETURNS: [191.25, 191.25, 0] // hsvToRgb([60, 1, 0.75]);

import { ColorHSV } from './types/ColorHSV';
import { ColorRGB } from './types/ColorRBG';

export const hsvToRgb = ([h, s, v]: ColorHSV): ColorRGB => {
  return [5, 3, 1].map((n) => {
    const k = (n + h / 60) % 6;

    return (v - v * s * Math.max(Math.min(k, 4 - k, 1), 0)) * 255;
  }) as ColorRGB;
};

export default hsvToRgb;
