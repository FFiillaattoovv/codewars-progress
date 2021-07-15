import { quarterOf } from './index';

test('should return the result in which quarter of the year the given month', () => {
    expect(quarterOf(3)).toBe(1);
    expect(quarterOf(8)).toBe(3);
    expect(quarterOf(11)).toBe(4);
})
