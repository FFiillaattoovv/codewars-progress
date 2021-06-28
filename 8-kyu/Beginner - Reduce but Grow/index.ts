export function grow(arr: number[]) {
    return arr.reduce((accum, curr) => accum * curr);
}