export function flattenAndSort(inputArray: number[][]): number[] {
    return ([] as number[]).concat(...inputArray).sort((a, b) => a - b);
}