export function sumPairs(ints: number[], s: number): [number, number] | void {
    if (ints[0] + ints[1] === s) {
        return [ints[0], ints[1]];
    }

    for (let i = 0; i < ints.length; i++) {
        const target = s - ints[i];
        const indexOne = ints.slice(0, i + 1).indexOf(target);
        const indexTwo = ints.slice(indexOne + 1, i + 2).indexOf(s - target);
        if (indexOne !== -1 && indexTwo !== -1) {
            return [ints[indexOne], ints[indexTwo + indexOne + 1]];
        }
    }
}