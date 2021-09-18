export var var1Boolean: boolean = true;

export var var2Decimal: number = 13;
export var var3Hex: number = parseInt("f00d", 16);
export var var4Binary: number = 63;
export var var5Octal: number = 484;

export var var6String: string = 'Hello, world!';

export var var7Array: Array<any> = [1, 'test', {a: 3}, 4, 5];
export var var8NumericArray: Array<number> = [1, 2, 3, 4, 5];

export var var9Tuple: [string, number] = ['key', 12345];

export enum Color { Red = 1, Green = 2, Blue = 4 }
export var var10Enum: Color = Color.Blue;

export var var11ArrayOfAny: Array<any> = [1, 'test', {a: 3}, 4, 5];

export function var12VoidFunction(): void {}

export var var13Null: null = null;
export var var14Undefined: undefined;

export function var15NeverFunction() {}