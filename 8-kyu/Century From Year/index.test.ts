import { centuryFromYear } from './index';

test('should return the century that the year is in', () => {
    expect(centuryFromYear(99)).toBe(1);
    expect(centuryFromYear(1899)).toBe(19);
    expect(centuryFromYear(229)).toBe(3);
    expect(centuryFromYear(2034)).toBe(21);
    expect(centuryFromYear(2034)).toBe(21);
})