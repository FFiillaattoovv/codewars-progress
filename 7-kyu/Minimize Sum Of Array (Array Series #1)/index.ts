export function minSum(arr: number[]): number {
    const sortArr = [...arr].sort((a, b) => a - b);
    let res = 0;
    for (let i = 0; i < arr.length / 2; i++) {
        res += sortArr.shift() * sortArr.pop();
    }
    return res;
}