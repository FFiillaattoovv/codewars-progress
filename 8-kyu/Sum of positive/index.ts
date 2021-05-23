export function positiveSum(arr: number[]): number {
    let result = 0;
    if (!arr.length) {
        return result;
    } else {
        arr.forEach((item) => {
            if (item > 0) result += item;
        })
        return result;
    }
}