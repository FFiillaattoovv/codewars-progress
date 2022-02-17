import { overTheRoad } from './index';

test('Given your house number address and length of street n, should return the house number on the opposite side of the street', () => {
    expect(overTheRoad(1, 3)).toBe(6);
    expect(overTheRoad(3, 3)).toBe(4);
    expect(overTheRoad(2, 3)).toBe(5);
    expect(overTheRoad(3, 5)).toBe(8);
    expect(overTheRoad(7, 11)).toBe(16);
})