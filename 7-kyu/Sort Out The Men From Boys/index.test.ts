import { menFromBoys } from './index';

test('should return an array where Even numbers come first then odds', () => {
    expect(menFromBoys([7, 3, 14, 17])).toEqual([14, 17, 7, 3]);
    expect(menFromBoys([2, 43, 95, 90, 37])).toEqual([2, 90, 95, 43, 37]);
    expect(menFromBoys([20, 33, 50, 34, 43, 46])).toEqual([20, 34, 46, 50, 43, 33]);
    expect(menFromBoys([82, 91, 72, 76, 76, 100, 85])).toEqual([72, 76, 82, 100, 91, 85]);
})