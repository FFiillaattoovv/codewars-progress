export function between(a: number, b: number): number[] {
    const arr = Array();
    while (a <= b) {
        arr.push(a);
        a++;
    }
    return arr;
}
