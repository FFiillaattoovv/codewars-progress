import { zeroFuel } from './index';

test('should return true if it can get to the pump and false if not', () => {
    expect(zeroFuel(50, 25, 2)).toBe(true);
    expect(zeroFuel(100, 50, 1)).toBe(false);
})
