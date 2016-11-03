"use strict";
function isValidRgb(rgb) {
    return rgb.r >= 0 && rgb.r <= 255 && rgb.g >= 0 && rgb.g <= 255 && rgb.b >= 0 && rgb.b <= 255;
}
exports.isValidRgb = isValidRgb;
function isValidHsv(hsv) {
    return hsv.h >= 0 && hsv.h <= 360 && hsv.s >= 0 && hsv.s <= 1 && hsv.v >= 0 && hsv.v <= 1;
}
exports.isValidHsv = isValidHsv;
//# sourceMappingURL=validations.js.map