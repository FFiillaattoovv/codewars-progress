export function sumTriangularNumbers(n: number): number {
    let res = 0;
    for (let i = 0; i <= n; i++) {
        res += i * (i + 1) / 2;
    }
    return res;
}