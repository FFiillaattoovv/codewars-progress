import {enough} from './index';

test('If there is enough space, should return 0, and if there isn\'t, return the number of passengers he can\'t take.', () => {
    expect(enough(10, 5, 5)).toBe(0);
    expect(enough(100, 60, 50)).toBe(10);
    expect(enough(50, 15, 10)).toBe(0);
})
