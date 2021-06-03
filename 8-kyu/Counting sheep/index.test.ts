import { countSheeps } from './index';

test('should returns the number of sheep present in the array', () => {
    expect(countSheeps([true, false, true, false, true, false])).toBe(3);
    expect(countSheeps([])).toBe(0);
    expect(countSheeps([undefined, undefined, undefined])).toBe(0);
    expect(countSheeps([null, null, null])).toBe(0);
    expect(countSheeps([true, null, true, null, true, false])).toBe(3);
    expect(countSheeps([true, undefined, true, undefined, true, false])).toBe(3);

})