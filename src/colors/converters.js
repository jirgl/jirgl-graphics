"use strict";
var validations_1 = require('./validations');
function rgbToHex(rgb) {
    if (!validations_1.isValidRgb(rgb))
        return null;
    var red = rgb.r.toString(16);
    var green = rgb.g.toString(16);
    var blue = rgb.b.toString(16);
    red = red.length < 2 ? '0' + red : red;
    green = green.length < 2 ? '0' + green : green;
    blue = blue.length < 2 ? '0' + blue : blue;
    return '#' + red + green + blue;
}
exports.rgbToHex = rgbToHex;
function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if (!result)
        return null;
    return {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    };
}
exports.hexToRgb = hexToRgb;
function rgbToGray(rgb) {
    if (!validations_1.isValidRgb(rgb))
        return null;
    return 0.299 * rgb.r + 0.587 * rgb.g + 0.114 * rgb.b;
}
exports.rgbToGray = rgbToGray;
function hsvToHex(hsv) {
    if (!validations_1.isValidHsv(hsv))
        return null;
    return rgbToHex(hsvToRgb(hsv));
}
exports.hsvToHex = hsvToHex;
function hsvToRgb(hsv) {
    if (!validations_1.isValidHsv(hsv))
        return null;
    var c = hsv.v * hsv.s;
    var x = c * (1 - Math.abs((hsv.h / 60) % 2 - 1));
    var m = hsv.v - c;
    var rgb;
    if (hsv.h >= 300) {
        rgb = { r: c, g: 0, b: x };
    }
    else if (hsv.h >= 240) {
        rgb = { r: x, g: 0, b: c };
    }
    else if (hsv.h >= 180) {
        rgb = { r: 0, g: x, b: c };
    }
    else if (hsv.h >= 120) {
        rgb = { r: 0, g: c, b: x };
    }
    else if (hsv.h >= 60) {
        rgb = { r: x, g: c, b: 0 };
    }
    else {
        rgb = { r: c, g: x, b: 0 };
    }
    rgb.r = Math.round((rgb.r + m) * 255);
    rgb.g = Math.round((rgb.g + m) * 255);
    rgb.b = Math.round((rgb.b + m) * 255);
    return rgb;
}
exports.hsvToRgb = hsvToRgb;
function rgbToHsv(rgb) {
    if (!validations_1.isValidRgb(rgb))
        return null;
    var r = rgb.r / 255;
    var g = rgb.g / 255;
    var b = rgb.b / 255;
    var max = Math.max(r, g, b);
    var min = Math.min(r, g, b);
    var delta = max - min;
    var saturation = max === 0 ? 0 : delta / max;
    var hue;
    if (delta === 0) {
        hue = 0;
    }
    else if (max === r) {
        hue = 60 * (((g - b) / delta) % 6);
    }
    else if (max === g) {
        hue = 60 * (((b - r) / delta) + 2);
    }
    else if (max === b) {
        hue = 60 * (((r - g) / delta) + 4);
    }
    return {
        h: hue < 0 ? 360 + hue : hue,
        s: saturation,
        v: max
    };
}
exports.rgbToHsv = rgbToHsv;
//# sourceMappingURL=converters.js.map