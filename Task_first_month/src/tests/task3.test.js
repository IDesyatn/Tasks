const { every } = require('../task3.js')



describe('every', () => {    
    test('Numbers are even', () => {
        expect(every([8,4,2], function(num) {return num % 2 === 0;})).toBe(true);
    });

    test('one number is odd', () => {
        expect(every([8,3,2], function(num) {return num % 2 === 0;})).toBe(false);
    });

    test('Numbers are odd', () => {
        expect(every([1,3,5], function(num) {return num % 2 === 0;})).toBe(false);
    });
})