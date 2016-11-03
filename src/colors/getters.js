"use strict";
var converters = require('./converters');
var contrastColorThreshold = 186;
var contrastColorLinearRange = 6;
var whiteColor = { r: 255, g: 255, b: 255 };
var blackColor = { r: 0, g: 0, b: 0 };
(function (GradientType) {
    GradientType[GradientType["Step"] = 0] = "Step";
    GradientType[GradientType["Linear"] = 1] = "Linear";
})(exports.GradientType || (exports.GradientType = {}));
var GradientType = exports.GradientType;
function getLinearContrastColor(gray) {
    var min = contrastColorThreshold - contrastColorLinearRange / 2;
    var max = contrastColorThreshold + contrastColorLinearRange / 2;
    if (gray > max)
        return blackColor;
    if (gray < min)
        return whiteColor;
    var ratio = 1 - (gray - min) / contrastColorLinearRange;
    var gradientGray = Math.round(255 * ratio);
    return { r: gradientGray, g: gradientGray, b: gradientGray };
}
function getContrastColorFromRgb(rgb, type) {
    var gray = converters.rgbToGray(rgb);
    if (type === GradientType.Step)
        return gray > contrastColorThreshold ? blackColor : whiteColor;
    return getLinearContrastColor(gray);
}
exports.getContrastColorFromRgb = getContrastColorFromRgb;
function getContrastColorFromGray(gray, type) {
    if (type === GradientType.Step)
        return gray > contrastColorThreshold ? blackColor : whiteColor;
    return getLinearContrastColor(gray);
}
exports.getContrastColorFromGray = getContrastColorFromGray;
//# sourceMappingURL=getters.js.map