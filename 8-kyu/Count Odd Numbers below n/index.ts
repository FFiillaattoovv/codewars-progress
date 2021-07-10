export function oddCount(n: number) {
    return n === 1 ? n : Math.floor(n - n / 2);
}
