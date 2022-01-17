const { Number } = require("../task2.js");


describe('number is odd', () => {
    const a = 13;
    const b = 6;
    const c = 0;

    test('Number is odd', ()  => {
        expect(a.isOdd()).toBe(true);
    });

    test('Number is even', ()  => {
        expect(b.isOdd(6)).toBe(false);
    });

    test('Number is zero', ()  => {
        expect(c.isOdd(0)).toBe(false);
    });
})