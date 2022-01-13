export function sumDigits(n: number): number {
    return String(Math.abs(n))
        .split('')
        .reduce((prev, curr) => prev + Number(curr), 0);
}