export function seven(m: number): number[] {
    let counter = 0;
    while (String(m).length > 2) {
        counter++;
        m = Math.floor(m / 10) - (m % 10) * 2;
    }
    return [m, counter];
}