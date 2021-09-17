import { arr2bin } from './index';

test('should add all the number elements and return the binary equivalent of that sum', () => {
    expect(arr2bin([1,2])).toBe('11');
    expect(arr2bin([1,2,3,4,5])).toBe('1111');
    expect(arr2bin([1,10,100,1000])).toBe('10001010111');
    expect(arr2bin([true,true,false,15])).toBe('1111');
})
