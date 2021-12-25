import { twiceAsOld } from './index';

test('should return result how many years ago the father was twice as old as his son', () => {
    expect(twiceAsOld(36,7)).toBe(22);
    expect(twiceAsOld(55,30)).toBe(5);
    expect(twiceAsOld(42,21)).toBe(0);
})