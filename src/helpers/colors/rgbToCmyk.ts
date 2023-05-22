// RETURNS: [0.09, 0.33, 0, 0] // rgbToCmyk([232, 170, 255]);

import { ColorCMYK } from './types/ColorCMYK';
import { ColorRGB } from './types/ColorRBG';

export const rgbToCmyk = ([r, g, b]: ColorRGB): ColorCMYK => {
  const newR = r / 255;
  const newG = g / 255;
  const newB = b / 255;

  const k = Math.min(1 - newR, 1 - newG, 1 - newB);

  return [
    (1 - newR - k) / (1 - k) || 0,
    (1 - newG - k) / (1 - k) || 0,
    (1 - newB - k) / (1 - k) || 0,
    k || 0,
  ];
};

export default rgbToCmyk;
