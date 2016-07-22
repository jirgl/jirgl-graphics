import * as converter from '../src/converters';

describe('Converters', () => {
    it('from rgb to hex', () => {
        expect(converter.rgbToHex({ r: 0, g: 0, b: 0 })).toBe('#000000');
        expect(converter.rgbToHex({ r: 128, g: 0, b: 0 })).toBe('#800000');
        expect(converter.rgbToHex({ r: 255, g: 255, b: 255 })).toBe('#ffffff');

        expect(converter.rgbToHex({ r: 256, g: 0, b: 0 })).toBe(null);
        expect(converter.rgbToHex({ r: -1, g: 0, b: 0 })).toBe(null);
    });

    it('from hex to rgb', () => {
        expect(converter.hexToRgb('#000000')).toEqual({ r: 0, g: 0, b: 0 });
        expect(converter.hexToRgb('#800000')).toEqual({ r: 128, g: 0, b: 0 });
        expect(converter.hexToRgb('#ffffff')).toEqual({ r: 255, g: 255, b: 255 });
        expect(converter.hexToRgb('ffffff')).toEqual({ r: 255, g: 255, b: 255 });

        expect(converter.hexToRgb('#gfffff')).toEqual(null);
        expect(converter.hexToRgb('#fff')).toEqual(null);
        expect(converter.hexToRgb('#-100000')).toEqual(null);
    });
});
