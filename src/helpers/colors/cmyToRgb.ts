// RETURNS: [255, 165.75, 165.75] // cmyToRgb([0, 0.35, 0.35]);

import { ColorCMY } from './types/ColorCMY';
import { ColorRGB } from './types/ColorRBG';

export const cmyToRgb = ([c, m, y]: ColorCMY): ColorRGB => {
  return [255 * (1 - c), 255 * (1 - m), 255 * (1 - y)];
};

export default cmyToRgb;
