export function getRealFloor(n: number): number {
    return n > 0 && n < 13 ? n - 1 : n > 12 ? n - 2 : n;
}
