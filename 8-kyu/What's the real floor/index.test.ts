import { getRealFloor } from './index';

test('getting a floor in the american system should returns the floor in the european system', () => {
    expect(getRealFloor(1)).toBe(0);
    expect(getRealFloor(5)).toBe(4);
    expect(getRealFloor(15)).toBe(13);
})
