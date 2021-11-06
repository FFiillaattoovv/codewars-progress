export function sumPairs(ints: number[], s: number): [number, number] | void {
    const resArray = [];
    for (let i = 1; i < ints.length; i++) {
        const target = s - ints[i - 1];
        const index = ints.slice(i).indexOf(target);
        if (index !== -1) {
            if (resArray.length === 0) {
                resArray.push(i - 1, index + i)
            } else if (Math.max(resArray[0], resArray[1]) > Math.max(i - 1, index + i)) {
                resArray[0] = i - 1;
                resArray[1] = index + i;
                break;
            }
        }
    }
    return resArray.length === 0 ? undefined : [ints[resArray[0]], ints[resArray[1]]];
}