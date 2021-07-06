export function sumMix(x: any[]): number {
    return x.reduce((accum, curr) => Number(accum) + Number(curr));
}
