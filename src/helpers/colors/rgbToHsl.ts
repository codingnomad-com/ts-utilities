// RETURNS: [210, 1, 0.314] // rgbToHsl([0, 80, 160]);

import { ColorHSL } from './types/ColorHSL';
import { ColorRGB } from './types/ColorRBG';

export const rgbToHsl = ([r, g, b]: ColorRGB): ColorHSL => {
  const newR = r / 255;
  const newG = g / 255;
  const newB = b / 255;

  const max = Math.max(newR, newG, newB);
  const min = Math.min(newR, newG, newB);

  const delta = max - min;

  let h = 0;

  switch (max) {
    case min:
      h = 0;
      break;

    case newR:
      h = 0 + (g - newB) / delta;
      break;

    case newG:
      h = 2 + (newB - newR) / delta;
      break;

    case newB:
      h = 4 + (newR - newG) / delta;
      break;

    default:
      break;
  }

  if (h < 0) h += 360;

  const l = (max + min) / 2;

  const s = max === 0 || min === 1 ? 0 : (max - l) / Math.min(l, 1 - l);

  return [(60 * h) % 360, s, l];
};

export default rgbToHsl;
