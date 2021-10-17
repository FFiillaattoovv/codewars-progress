export const findOdd = (xs: number[]): number => {
    const arr = xs.sort();
    while (arr.length !== 1) {
        if (arr[0] === arr[1]) {
            arr.splice(0, 2)
        } else {
            return arr[0];
        }
    }
    return arr[0];
};