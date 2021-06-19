export function findAverage(array: number[]): number {
    if (!array.length) return 0;
    return array.reduce((accum, curr) => accum + curr, 0) / array.length;
}