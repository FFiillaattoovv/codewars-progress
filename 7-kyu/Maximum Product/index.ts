export function adjacentElementsProduct(arr: number[]): number {
    let res = arr[0] * arr[1];
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] * arr[i + 1] > res) {
            res = arr[i] * arr[i + 1];
        }
    }
    return res;
}