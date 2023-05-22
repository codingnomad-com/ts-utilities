/* eslint-disable no-bitwise */
// RETURNS: [0xbb, 0xff, 0xdd] // hexToRgb(0xbbffdd);
// RETURNS: [0x5A, 0x3B, 0xC4] // hexToRgb("5A3BC4");

import { ColorHEX } from './types/ColorHEX';
import { ColorRGB } from './types/ColorRBG';

export const hexToRGB = (hexInput: ColorHEX): ColorRGB => {
  let hex = hexInput;

  if (typeof hex === 'string') {
    hex = parseInt(hex.replace(/^0x|#/i, ''), 16);
  }

  return [(hex & 0xff0000) >> 16, (hex & 0x00ff00) >> 8, (hex & 0x0000ff) >> 0];
};

export default hexToRGB;
