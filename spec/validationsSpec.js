"use strict";
var validations = require('../src/colors/validations');
describe('Validations', function () {
    it('rgb validation', function () {
        expect(validations.isValidRgb({ r: 255, g: 0, b: 0 })).toBe(true);
        expect(validations.isValidRgb({ r: 256, g: 0, b: 0 })).toBe(false);
        expect(validations.isValidRgb({ r: -1, g: 0, b: 0 })).toBe(false);
        expect(validations.isValidRgb({ r: 0, g: 256, b: 0 })).toBe(false);
        expect(validations.isValidRgb({ r: 0, g: -1, b: 0 })).toBe(false);
        expect(validations.isValidRgb({ r: 0, g: 0, b: 256 })).toBe(false);
        expect(validations.isValidRgb({ r: 0, g: 0, b: -1 })).toBe(false);
        expect(validations.isValidRgb({ r: undefined, g: 0, b: 0 })).toBe(false);
        expect(validations.isValidRgb({ r: 0, g: undefined, b: 0 })).toBe(false);
        expect(validations.isValidRgb({ r: 0, g: 0, b: undefined })).toBe(false);
    });
    it('hsv validation', function () {
        expect(validations.isValidHsv({ h: 180, s: 0, v: 0 })).toBe(true);
        expect(validations.isValidHsv({ h: -1, s: 0, v: 0 })).toBe(false);
        expect(validations.isValidHsv({ h: 361, s: 0, v: 0 })).toBe(false);
        expect(validations.isValidHsv({ h: 360, s: -0.1, v: 0 })).toBe(false);
        expect(validations.isValidHsv({ h: 360, s: 1.1, v: 0 })).toBe(false);
        expect(validations.isValidHsv({ h: 360, s: 0, v: -0.1 })).toBe(false);
        expect(validations.isValidHsv({ h: 360, s: 0, v: 1.1 })).toBe(false);
    });
});
//# sourceMappingURL=validationsSpec.js.map