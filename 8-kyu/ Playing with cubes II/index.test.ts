import { Cube } from './index';

test('negative values switched to positive ones and if constructor taking no arguments should assign 0 to Cube\'s Side property', () => {
    expect(new Cube(10).getSide()).toBe(10);
})
