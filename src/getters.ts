import { rgb } from './colorModels';
import * as converters from './converters';

const threshold = 186;
const lightColor = { r: 255, g: 255, b: 255 };
const darkColor = { r: 0, g: 0, b: 0 };

export function getContrastColorFromRgb(rgb: rgb): rgb {
    return converters.rgbToGray(rgb) > threshold ? darkColor : lightColor;
}

export function getContrastColorFromGray(gray: number): rgb {
    return gray > threshold ? darkColor : lightColor;
}
