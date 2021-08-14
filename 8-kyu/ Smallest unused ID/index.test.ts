import { nextId } from './index';

test('should returns the smallest unused ID for your next new data item', () => {
    expect(nextId([0,1,2,3,5])).toBe(4);
    expect(nextId([0,1,2,3,4,5,6,7,8,9,10])).toBe(11);
})
