import { checkForFactor } from './index';

test('should return true if it is a factor or false if it is not', () => {
    expect(checkForFactor(10, 2)).toBe(true);
    expect(checkForFactor(24612, 3)).toBe(true);
    expect(checkForFactor(9, 2)).toBe(false);
})
