export function rowWeights(arr: number[]) {
    let arr1 = 0;
    let arr2 = 0;
    arr.forEach((value, index) => index % 2 ? arr2 += value : arr1 += value);
    return [arr1, arr2];
}