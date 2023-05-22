// RETURNS: [0, 0.35, 0.35] // cmykToCmy([0, 0.35, 0.35, 0]);

import { ColorCMY } from './types/ColorCMY';
import { ColorCMYK } from './types/ColorCMYK';

export const cmykToCmy = ([c, m, y, k]: ColorCMYK): ColorCMY => {
  return [c * (1 - k) + k, m * (1 - k) + k, y * (1 - k) + k];
};

export default cmykToCmy;
