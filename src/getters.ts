import { rgb } from './colorModels';
import * as converters from './converters';

const contrastColorThreshold = 186;
const contrastColorLinearRange = 6;
const whiteColor = { r: 255, g: 255, b: 255 };
const blackColor = { r: 0, g: 0, b: 0 };

export enum GradientType {
    Step, Linear
}

function getLinearContrastColor(gray: number): rgb {
    const min = contrastColorThreshold - contrastColorLinearRange / 2;
    const max = contrastColorThreshold + contrastColorLinearRange / 2;

    if (gray > max) return blackColor;
    if (gray < min) return whiteColor;

    const ratio = 1 - (gray - min) / contrastColorLinearRange;
    const gradientGray = Math.round(255 * ratio);
    return { r: gradientGray, g: gradientGray, b: gradientGray };
}

export function getContrastColorFromRgb(rgb: rgb, type: GradientType): rgb {
    const gray = converters.rgbToGray(rgb);
    if (type === GradientType.Step) return gray > contrastColorThreshold ? blackColor : whiteColor;

    return getLinearContrastColor(gray);
}

export function getContrastColorFromGray(gray: number, type: GradientType): rgb {
    if (type === GradientType.Step) return gray > contrastColorThreshold ? blackColor : whiteColor;

    return getLinearContrastColor(gray);
}
