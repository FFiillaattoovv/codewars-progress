export const reverseSeq = (n: number): number[] => {
    let arr = [];
    for (let i = 1; i <= n; i++) {
        arr.push(i);
    }
    return arr.reverse();
};