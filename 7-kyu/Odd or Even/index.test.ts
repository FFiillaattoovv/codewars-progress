import { oddOrEven } from './index';

test('If the sum elements even should return "even" otherwise "odd"', () => {
    expect(oddOrEven([0, 1, 5])).toBe('even');
    expect(oddOrEven([0, 1, 2])).toBe('odd');
})