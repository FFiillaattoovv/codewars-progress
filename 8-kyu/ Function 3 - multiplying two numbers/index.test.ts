import { multiply } from './index';

test('should return the result of multiplying the incoming arguments', () => {
    expect(multiply(2, 3)).toBe(6);
})
