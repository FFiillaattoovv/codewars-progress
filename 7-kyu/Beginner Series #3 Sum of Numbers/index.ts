export function getSum(a: number, b: number): number {
    const min = Math.min(a, b);
    const max = Math.max(a, b);
    return (min + max) * (max - min + 1) / 2;
}