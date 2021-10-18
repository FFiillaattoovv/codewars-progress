import { dirReduc } from './index';

test('should returns an array of strings with the needless directions removed', () => {
    expect(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"])).toEqual(["WEST"]);
    expect(dirReduc(["NORTH","SOUTH","SOUTH","EAST","WEST","NORTH"])).toEqual([]);
})