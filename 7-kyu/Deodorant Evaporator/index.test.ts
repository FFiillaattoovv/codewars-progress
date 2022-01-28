import { evaporator } from './index';

test('should tests the life of an evaporator containing a gas', () => {
    expect(evaporator(10, 10, 10)).toBe(22);
    expect(evaporator(10, 10, 5)).toBe(29);
})