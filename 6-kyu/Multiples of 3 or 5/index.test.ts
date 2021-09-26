import { Challenge } from './index';

test('should return the sum of all multiples of 3 or 5 below a given number', () => {
    expect(Challenge.solution(10)).toBe(23);
})