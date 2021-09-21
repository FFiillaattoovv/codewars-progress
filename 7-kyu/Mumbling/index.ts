export function accum(s: string): string {
    return s
        .split('')
        .map((c, i) => c.toUpperCase() + c.toLowerCase().repeat(i))
        .join('-');
}