import { countSheep } from './index';

test('should return the string "1 sheep..." as many times, depending on the argument passed', () => {
    expect(countSheep(1)).toBe('1 sheep...');
    expect(countSheep(2)).toBe('1 sheep...2 sheep...');
    expect(countSheep(3)).toBe('1 sheep...2 sheep...3 sheep...');
})
