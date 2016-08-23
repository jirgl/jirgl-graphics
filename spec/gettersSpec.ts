import * as getters from '../src/colors/getters';

describe('Getters', () => {
    it('get contrast color', () => {
        expect(getters.getContrastColorFromRgb({ r: 100, g: 10, b: 100 })).toEqual({ r: 255, g: 255, b: 255 });
        expect(getters.getContrastColorFromRgb({ r: 255, g: 250, b: 255 })).toEqual({ r: 0, g: 0, b: 0 });
    });
});
