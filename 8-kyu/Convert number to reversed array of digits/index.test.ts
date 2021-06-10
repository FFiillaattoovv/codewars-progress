import { digitize } from './index';

test('should to convert number to reversed array of digits', () => {
    expect(digitize(348597)).toEqual([7,9,5,8,4,3]);
    expect(digitize(35231)).toEqual([1,3,2,5,3]);
})