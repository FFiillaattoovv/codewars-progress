export function findMultiples(integer: number, limit: number): number[] {
    let int = integer;
    const arr = [];
    while (int <= limit) {
        arr.push(int);
        int += integer;
    }
    return arr;
}
