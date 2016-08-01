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

    it('from rgb to gray', () => {
        expect(converter.rgbToGray({ r: 0, g: 0, b: 0 })).toBe(0);
        expect(converter.rgbToGray({ r: 128, g: 0, b: 0 })).toBe(38.272);
        expect(converter.rgbToGray({ r: 255, g: 255, b: 255 })).toBe(255);

        expect(converter.rgbToGray({ r: 256, g: 0, b: 0 })).toBe(null);
        expect(converter.rgbToGray({ r: -1, g: 0, b: 0 })).toBe(null);
        expect(converter.rgbToGray({ r: undefined, g: 0, b: 0 })).toBe(null);
    });

    it('from rgb to hsv', () => {
        expect(converter.rgbToHsv({ r: 83, g: 115, b: 29 }))
            .toEqual({ h: 82.32558139534883, s: 0.7478260869565218, v: 0.45098039215686275 });

        expect(converter.rgbToHsv({ r: 0, g: 0, b: 0 })).toEqual({ h: 0, s: 0, v: 0 });

        expect(converter.rgbToHsv({ r: 255, g: 255, b: 255 })).toEqual({ h: 0, s: 0, v: 1 });
        expect(converter.rgbToHsv({ r: 255, g: 128, b: 128 })).toEqual({ h: 0, s: 0.4980392156862745, v: 1 });

        expect(converter.rgbToHsv({ r: 255, g: 0, b: 0 })).toEqual({ h: 0, s: 1, v: 1 });
        expect(converter.rgbToHsv({ r: 255, g: 255, b: 0 })).toEqual({ h: 60, s: 1, v: 1 });
        expect(converter.rgbToHsv({ r: 0, g: 255, b: 0 })).toEqual({ h: 120, s: 1, v: 1 });
        expect(converter.rgbToHsv({ r: 0, g: 255, b: 255 })).toEqual({ h: 180, s: 1, v: 1 });
        expect(converter.rgbToHsv({ r: 0, g: 0, b: 255 })).toEqual({ h: 240, s: 1, v: 1 });
        expect(converter.rgbToHsv({ r: 255, g: 0, b: 255 })).toEqual({ h: 300, s: 1, v: 1 });
        expect(converter.rgbToHsv({ r: 255, g: 0, b: 0 })).toEqual({ h: 0, s: 1, v: 1 });

        expect(converter.rgbToHsv({ r: 256, g: 0, b: 0 })).toBe(null);
        expect(converter.rgbToHsv({ r: 0, g: 256, b: 0 })).toBe(null);
        expect(converter.rgbToHsv({ r: 0, g: 0, b: 256 })).toBe(null);
        expect(converter.rgbToHsv({ r: -1, g: 0, b: 0 })).toBe(null);
        expect(converter.rgbToHsv({ r: 0, g: -1, b: 0 })).toBe(null);
        expect(converter.rgbToHsv({ r: 0, g: 0, b: -1 })).toBe(null);
    });

    it('from hsv to rgb', () => {
        expect(converter.hsvToRgb({ h: 82, s: 0.748, v: 0.451 })).toEqual({ r: 83, g: 115, b: 29 });

        expect(converter.hsvToRgb({ h: 82, s: 0.748, v: 0 })).toEqual({ r: 0, g: 0, b: 0 });
        expect(converter.hsvToRgb({ h: 150, s: 0.374, v: 0 })).toEqual({ r: 0, g: 0, b: 0 });

        expect(converter.hsvToRgb({ h: 0, s: 0, v: 1 })).toEqual({ r: 255, g: 255, b: 255 });
        expect(converter.hsvToRgb({ h: 0, s: 0.5, v: 1 })).toEqual({ r: 255, g: 128, b: 128 });

        expect(converter.hsvToRgb({ h: 0, s: 1, v: 1 })).toEqual({ r: 255, g: 0, b: 0 });
        expect(converter.hsvToRgb({ h: 60, s: 1, v: 1 })).toEqual({ r: 255, g: 255, b: 0 });
        expect(converter.hsvToRgb({ h: 120, s: 1, v: 1 })).toEqual({ r: 0, g: 255, b: 0 });
        expect(converter.hsvToRgb({ h: 180, s: 1, v: 1 })).toEqual({ r: 0, g: 255, b: 255 });
        expect(converter.hsvToRgb({ h: 240, s: 1, v: 1 })).toEqual({ r: 0, g: 0, b: 255 });
        expect(converter.hsvToRgb({ h: 300, s: 1, v: 1 })).toEqual({ r: 255, g: 0, b: 255 });
        expect(converter.hsvToRgb({ h: 360, s: 1, v: 1 })).toEqual({ r: 255, g: 0, b: 0 });

        expect(converter.hsvToRgb({ h: -1, s: 0, v: 0 })).toBe(null);
        expect(converter.hsvToRgb({ h: 361, s: 0, v: 0 })).toBe(null);
        expect(converter.hsvToRgb({ h: 361, s: -0.1, v: 0 })).toBe(null);
        expect(converter.hsvToRgb({ h: 361, s: 1.1, v: 0 })).toBe(null);
        expect(converter.hsvToRgb({ h: 361, s: 0, v: -0.1 })).toBe(null);
        expect(converter.hsvToRgb({ h: 361, s: 0, v: 1.1 })).toBe(null);
    });
});
