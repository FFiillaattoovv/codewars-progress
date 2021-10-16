export function isTriangle(a: number, b: number, c: number): boolean {
    let max = Math.max(a, b, c);
    let sum = a + b + c;
    return sum - max > max;
}