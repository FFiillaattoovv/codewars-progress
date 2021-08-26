import { sakuraFall } from './index';

test('should return the time it takes for that petal to reach the ground', () => {
    expect(sakuraFall(5)).toBe(80);
    expect(sakuraFall(10)).toBe(40);
    expect(sakuraFall(200)).toBe(2);
    expect(sakuraFall(-1)).toBe(0);
    expect(sakuraFall(0)).toBe(0);
})
