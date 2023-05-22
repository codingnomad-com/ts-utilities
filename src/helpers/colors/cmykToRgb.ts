// RETURNS: [24, 52, 94] // cmykToRrg([0.24, 0.52, 0.94, 0]);

import { ColorCMYK } from './types/ColorCMYK';
import { ColorRGB } from './types/ColorRBG';

export const cmykToRgb = ([c, m, y, k]: ColorCMYK): ColorRGB => {
  return [
    255 * (1 - c) * (1 - k),
    255 * (1 - m) * (1 - k),
    255 * (1 - y) * (1 - k),
  ];
};

export default cmykToRgb;
