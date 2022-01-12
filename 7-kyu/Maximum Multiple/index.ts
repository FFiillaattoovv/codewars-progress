export function maxMultiple(divisor: number, bound: number): number {
    return Math.trunc(bound / divisor) * divisor;
}