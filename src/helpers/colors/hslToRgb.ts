// RETURNS: [53, 53, 72] // hslToRgb([240, 0.25, 0.62]);

import { ColorHSL } from './types/ColorHSL';
import { ColorRGB } from './types/ColorRBG';

export const hslToRgb = ([h, s, l]: ColorHSL): ColorRGB => {
  const a = s * Math.min(l, 1 - l);

  return [0, 8, 4].map((n) => {
    const k = (n + h / 30) % 12;

    return (l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1)) * 255;
  }) as ColorRGB;
};

export default hslToRgb;
