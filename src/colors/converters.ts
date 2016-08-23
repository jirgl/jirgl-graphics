import { hex, hsv, rgb } from './colorModels';
import { isValidHsv, isValidRgb } from './validations';

export function rgbToHex(rgb: rgb): hex {
    if (!isValidRgb(rgb)) return null;

    let red = rgb.r.toString(16);
    let green = rgb.g.toString(16);
    let blue = rgb.b.toString(16);

    red = red.length < 2 ? '0' + red : red;
    green = green.length < 2 ? '0' + green : green;
    blue = blue.length < 2 ? '0' + blue : blue;
    return '#' + red + green + blue;
}

export function hexToRgb(hex: hex): rgb {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if (!result) return null;

    return {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    };
}

export function rgbToGray(rgb: rgb): number {
    if (!isValidRgb(rgb)) return null;

    return 0.299 * rgb.r + 0.587 * rgb.g + 0.114 * rgb.b;
}

export function hsvToHex(hsv: hsv): hex {
    if (!isValidHsv(hsv)) return null;
    return rgbToHex(hsvToRgb(hsv));
}

export function hsvToRgb(hsv: hsv): rgb {
    if (!isValidHsv(hsv)) return null;

    const c = hsv.v * hsv.s;
    const x = c * (1 - Math.abs((hsv.h / 60) % 2 - 1));
    const m = hsv.v - c;

    let rgb: rgb;
    if (hsv.h >= 300) {
        rgb = { r: c, g: 0, b: x };
    } else if (hsv.h >= 240) {
        rgb = { r: x, g: 0, b: c };
    } else if (hsv.h >= 180) {
        rgb = { r: 0, g: x, b: c };
    } else if (hsv.h >= 120) {
        rgb = { r: 0, g: c, b: x };
    } else if (hsv.h >= 60) {
        rgb = { r: x, g: c, b: 0 };
    } else {
        rgb = { r: c, g: x, b: 0 };
    }

    rgb.r = Math.round((rgb.r + m) * 255);
    rgb.g = Math.round((rgb.g + m) * 255);
    rgb.b = Math.round((rgb.b + m) * 255);
    return rgb;
}

export function rgbToHsv(rgb: rgb): hsv {
    if (!isValidRgb(rgb)) return null;

    const r = rgb.r / 255;
    const g = rgb.g / 255;
    const b = rgb.b / 255;
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const delta = max - min;
    const saturation = max === 0 ? 0 : delta / max;

    let hue: number;
    if (delta === 0) {
        hue = 0;
    } else if (max === r) {
        hue = 60 * (((g - b) / delta) % 6);
    } else if (max === g) {
        hue = 60 * (((b - r) / delta) + 2);
    } else if (max === b) {
        hue = 60 * (((r - g) / delta) + 4);
    }

    return {
        h: hue < 0 ? 360 + hue : hue,
        s: saturation,
        v: max
    };
}
