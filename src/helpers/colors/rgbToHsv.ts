// RETURNS: [210, 1, 0.6275] // rgbToHsv([0, 80, 160]);

import { ColorHSV } from './types/ColorHSV';
import { ColorRGB } from './types/ColorRBG';

export const rgbToHsv = ([r, g, b]: ColorRGB): ColorHSV => {
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

    case r:
      h = 0 + (g - b) / delta;
      break;

    case g:
      h = 2 + (b - r) / delta;
      break;

    case b:
      h = 4 + (r - g) / delta;
      break;

    default:
      break;
  }

  if (h < 0) h += 360;

  const s = max > 0 ? (max - min) / max : 0;

  return [(60 * h) % 360, s, max];
};

export default rgbToHsv;
