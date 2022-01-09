export function divisors(n: number) {
    const arr = [];
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            arr.push(i);
        }
    }
    return arr.length;
}