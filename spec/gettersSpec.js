"use strict";
var getters = require('../src/colors/getters');
describe('Getters', function () {
    it('get contrast color', function () {
        expect(getters.getContrastColorFromRgb({ r: 100, g: 10, b: 100 })).toEqual({ r: 255, g: 255, b: 255 });
        expect(getters.getContrastColorFromRgb({ r: 255, g: 250, b: 255 })).toEqual({ r: 0, g: 0, b: 0 });
    });
});
//# sourceMappingURL=gettersSpec.js.map