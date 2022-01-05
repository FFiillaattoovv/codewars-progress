import { dutyFree } from './index';

test('should return the number of bottles of whiskey from the duty free shop that you would have to buy so that the savings over the regular price on the street actually cover the cost of your vacation', () => {
    expect(dutyFree(12, 50, 1000)).toBe(166);
    expect(dutyFree(17, 10, 500)).toBe(294);
    expect(dutyFree(24, 35, 3000)).toBe(357);
})