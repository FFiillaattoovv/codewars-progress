import {
    Color,
    var10Enum, var11ArrayOfAny, var12VoidFunction, var13Null, var14Undefined,
    var1Boolean,
    var2Decimal,
    var3Hex,
    var4Binary,
    var5Octal,
    var6String,
    var7Array,
    var8NumericArray, var9Tuple
} from './index';

test('all conditions must be met without errors', () => {
    expect(var1Boolean).toBe(true);
    expect(var2Decimal).toBe(13);
    expect(var3Hex).toBe(61453);
    expect(var4Binary).toBe(111111);
    expect(var5Octal).toBe(744);
    expect(var6String).toBe('Hello, world!');
    expect(var7Array).toEqual([1, 'test', {a: 3}, 4, 5]);
    expect(var8NumericArray).toEqual([1, 2, 3, 4, 5]);
    expect(var9Tuple).toEqual(['key', 12345]);
    expect(var10Enum).toBe(Color.Blue);
    expect(var11ArrayOfAny).toEqual([1, 'test', {a: 3}, 4, 5]);
    expect(var13Null).toBeNull();
    expect(var14Undefined).toBeUndefined();
})