import { gooseFilter } from './index';

test('should return the resulting array with the given words removed', () => {
    expect(gooseFilter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"])).toEqual(["Mallard", "Hook Bill", "Crested", "Blue Swedish"]);
    expect(gooseFilter(["Mallard", "Barbary", "Hook Bill", "Blue Swedish", "Crested"])).toEqual(["Mallard", "Barbary", "Hook Bill", "Blue Swedish", "Crested"]);
    expect(gooseFilter(["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"])).toEqual([]);
})
