import { move } from './index';

test('should takes the current position of the hero and the roll (1-6) and return the new position', () => {
    expect(move(0, 4)).toBe(8);
    expect(move(3, 6)).toBe(15);
    expect(move(2, 5)).toBe(12);
})
