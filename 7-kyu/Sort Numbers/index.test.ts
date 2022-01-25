import { solution } from './index';

test('should return a sorted array of numbers, if an empty array or a null value is passed, then it should return an empty array', () => {
    expect(solution([1, 2, 10, 50, 5])).toEqual([1, 2, 5, 10, 50]);
    expect(solution([])).toEqual([]);
});