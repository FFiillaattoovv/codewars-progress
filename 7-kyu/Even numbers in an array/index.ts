export function evenNumbers(array: number[], n: number): number[] {
    return array.filter(num => num % 2 === 0).splice(-n, n);
}