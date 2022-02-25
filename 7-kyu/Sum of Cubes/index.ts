export function sumCubes(n: number): number {
    let res = 0;
    for (let i = 1; i <= n; i++) {
        res += i ** 3;
    }
    return res;
}