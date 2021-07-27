export function checkExam(array1: string[], array2: string[]): number {
    const res = array2.reduce((acc, curr, index) => {
        return curr === array1[index] ? acc + 4 : curr !== '' ? acc - 1 : acc;
    }, 0);
    return res < 0 ? 0 : res;
}
