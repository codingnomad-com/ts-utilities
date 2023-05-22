// RETURNS: "#FF050D" // rgbToHex([0xBB, 0xFF, 0xDD]);
// RETURNS: 0xBBFFDD // rgbToHex([0xBB, 0xFF, 0xDD], true);

import { ColorHEX } from './types/ColorHEX';
import { ColorRGB } from './types/ColorRBG';

export const rgbToHex = ([r, g, b]: ColorRGB, asNumber = false): ColorHEX => {
  return asNumber
    ? // eslint-disable-next-line no-bitwise
      (r << 16) | (g << 8) | b
    : `#${[r, g, b].map((n) => (n < 16 ? '0' : '') + n.toString(16)).join('')}`;
};

export default rgbToHex;
