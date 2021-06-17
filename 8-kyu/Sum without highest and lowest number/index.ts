export function sumArray(array: number[]): number {
    if (array && array.length > 1) {
        array.sort(function (a: number, b: number): number {
            return a - b;
        });
        return array.slice(1, array.length - 1).reduce((prev: number, curr: number): number => prev + curr, 0);
    }
    return 0;
}