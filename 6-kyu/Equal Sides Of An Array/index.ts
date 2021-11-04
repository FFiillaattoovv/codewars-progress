export function findEvenIndex(arr: number[]): number {
    for (let i = 1; i < arr.length - 1; i++) {
        if (arr.slice(0, i).reduce((prev, curr) => prev + curr, 0) ===
            arr.slice(i + 1).reduce((prev, curr) => prev + curr, 0)) {
            return i;
        }
    }

    if (arr.slice(1).reduce((prev, curr) => prev + curr, 0) === 0) return 0;
    if (arr.reverse().slice(1).reduce((prev, curr) => prev + curr, 0) === 0) return arr.length - 1;

    return -1;
}