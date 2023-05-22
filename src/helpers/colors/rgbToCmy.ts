// RETURNS: [0, 0.35, 0.35] // rgbToCmy([255, 165.75, 165.75]);

import { ColorCMY } from './types/ColorCMY';
import { ColorRGB } from './types/ColorRBG';

export const rgbToCmy = ([r, g, b]: ColorRGB): ColorCMY => {
  return [1 - r / 255, 1 - g / 255, 1 - b / 255];
};

export default rgbToCmy;
