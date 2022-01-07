export function breakChocolate(n: number, m: number): number {
    return n * m - 1 < 0 ? 0 : n * m - 1;
}