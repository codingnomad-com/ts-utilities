// RETURNS: [0, 0.35, 0.35, 0] // cmyToCmyk([0, 0.35, 0.35]);

import { ColorCMY } from './types/ColorCMY';
import { ColorCMYK } from './types/ColorCMYK';

export const cmyToCmyk = ([c, m, y]: ColorCMY): ColorCMYK => {
  const k = Math.min(c, m, y);

  return [
    (c - k) / (1 - k) || 0,
    (m - k) / (1 - k) || 0,
    (y - k) / (1 - k) || 0,
    k,
  ];
};

export default cmyToCmyk;
