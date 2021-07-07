import { expressionsMatter } from './index';

test('should return the largest number obtained after inserting the following operators and brackets: +, *, ()', () => {
    expect(expressionsMatter(2, 1, 2)).toBe(6);
    expect(expressionsMatter(2, 1, 1)).toBe(4);
    expect(expressionsMatter(2, 2, 4)).toBe(16);
    expect(expressionsMatter(3, 3, 3)).toBe(27);
    expect(expressionsMatter(1, 1, 1)).toBe(3);
    expect(expressionsMatter(1, 2, 3)).toBe(9);
    expect(expressionsMatter(1, 3, 1)).toBe(5);
    expect(expressionsMatter(2, 2, 2)).toBe(8);
})
