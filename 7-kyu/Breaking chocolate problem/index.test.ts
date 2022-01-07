import { breakChocolate } from './index';

test('should return minimum number of breaks needed', () => {
    expect(breakChocolate(5,5)).toBe(24);
    expect(breakChocolate(7,4)).toBe(27);
    expect(breakChocolate(1,1)).toBe(0);
    expect(breakChocolate(0,0)).toBe(0);
    expect(breakChocolate(6,1)).toBe(5);
})