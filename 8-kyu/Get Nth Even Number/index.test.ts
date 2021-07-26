import { nthEven } from './index';

test('should return the Nth even number', () => {
    expect(nthEven(1)).toBe(0);
    expect(nthEven(2)).toBe(2);
    expect(nthEven(3)).toBe(4);
    expect(nthEven(100)).toBe(198);
})
