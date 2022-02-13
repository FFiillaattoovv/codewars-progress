import { G964 } from './index';

test('should return all the ways to divide a list (an array) of at least two elements into two non-empty parts', () => {
    expect(G964.partlist(["az", "toto", "picaro", "zone", "kiwi"])).toEqual([["az", "toto picaro zone kiwi"], ["az toto", "picaro zone kiwi"], ["az toto picaro", "zone kiwi"], ["az toto picaro zone", "kiwi"]]);
})