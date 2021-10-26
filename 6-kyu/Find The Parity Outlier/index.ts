export function findOutlier(integers: number[]): number {
    return integers.filter(i => i % 2 === 0).length === 1
        ? integers.find(i => i % 2 === 0)
        : integers.find(i => i % 2 !== 0)
}