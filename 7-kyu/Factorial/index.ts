export function factorial(n: number) {
    if (!n) {
        return 1;
    } else {
        return factorial(n - 1) * n;
    }
}