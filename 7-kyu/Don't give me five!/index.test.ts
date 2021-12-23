import { dontGiveMeFive } from './index';

test('should return the count of all numbers except numbers with a 5 in it', () => {
    expect(dontGiveMeFive(1,9)).toBe(8);
    expect(dontGiveMeFive(4,17)).toBe(12);
})