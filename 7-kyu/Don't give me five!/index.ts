export function dontGiveMeFive(start: number, end: number): number {
    let count = 0;
    for (let i = start; i <= end; i++) {
        if (!/5/.test(String(i))) {
            count++;
        }
    }
    return count;
}