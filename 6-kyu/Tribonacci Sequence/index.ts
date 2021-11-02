export function tribonacci([a, b, c]: [number, number, number], n: number): number[] {
    const arr = [a, b, c];
    let index = 0;

    for (let i = 0; arr.length < n; i++) {
        arr.push((arr[index] + arr[index + 1] + arr[index + 2]));
        index++;
    }

    return arr.slice(0, n);
}