export function getAverage(marks: number[]): number {
    return Math.floor(marks.reduce((accum, curr) => accum + curr, 0) / marks.length);
}