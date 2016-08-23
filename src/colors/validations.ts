import { hsv, rgb } from './colorModels';

export function isValidRgb(rgb: rgb): boolean {
    return rgb.r >= 0 && rgb.r <= 255 && rgb.g >= 0 && rgb.g <= 255 && rgb.b >= 0 && rgb.b <= 255;
}

export function isValidHsv(hsv: hsv): boolean {
    return hsv.h >= 0 && hsv.h <= 360 && hsv.s >= 0 && hsv.s <= 1 && hsv.v >= 0 && hsv.v <= 1;
}
