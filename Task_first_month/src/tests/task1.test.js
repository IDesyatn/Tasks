const { getDays } = require('../task1.js');

describe('getDays', () => {
    test('Month in digit', () => {
        expect(getDays(2020, 2)).toBe(29);
    });
    test('Month in word', () => {
        expect(getDays(2020, 'February')).toBe(29);
    });
    test('Defunct month', () => {
        expect(getDays(2022, 13)).toBe(false);
    });
    test('Negative year number', () => {
        expect(getDays(-2022, 2)).toBe(false);
    });
    test('Incorrect string', () => {
        expect(getDays(2022, 'sldfhfh')).toBe(false);
    });
});