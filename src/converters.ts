import { hex, hsv, rgb, rgba } from './colorModels';

export function rgbToHex(rgb: rgb): hex {
    let red = rgb.r.toString(16);
    let green = rgb.g.toString(16);
    let blue = rgb.b.toString(16);

    red = red.length < 2 ? '0' + red : red;
    green = green.length < 2 ? '0' + green : green;
    blue = blue.length < 2 ? '0' + blue : blue;
    return '#' + red + green + blue;
}

export function rgbaToHex(rgba: rgba): hex {
    let red = rgba.r.toString(16);
    let green = rgba.g.toString(16);
    let blue = rgba.b.toString(16);
    let alpha = rgba.a.toString(16);

    red = red.length < 2 ? '0' + red : red;
    green = green.length < 2 ? '0' + green : green;
    blue = blue.length < 2 ? '0' + blue : blue;
    alpha = alpha.length < 2 ? '0' + alpha : alpha;
    return '#' + red + green + blue;
}

export function hexToRgb(hex: hex): rgb {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    };
}

export function hsvToHex(hsv: hsv): hex {
    return rgbToHex(hsvToRgb(hsv));
}

export function hsvToRgb(hsv: hsv): rgb {
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

export function rgbToHue(rgb: rgb): number {
    const r = rgb.r / 255;
    const g = rgb.g / 255;
    const b = rgb.b / 255;
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const delta = max - min;
    let hue: number;

    if (delta === 0) {
        return 0;
    } else if (max === r) {
        hue = 60 * (((g - b) / delta) % 6);
    } else if (max === g) {
        hue = 60 * (((b - r) / delta) + 2);
    } else if (max === b) {
        hue = 60 * (((r - g) / delta) + 4);
    }

    return hue < 0 ? 360 + hue : hue;
}
