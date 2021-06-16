export const fakeBin = (x: string): string => {
    let res = '';
    for (let i = 0; i < x.length; i++) {
        Number(x[i]) < 5 ? res += 0 : res += 1;
    }
    return res;
};