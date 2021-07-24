export function squareOrSquareRoot(array: number[]): number[] {
    return array.map(el => {
            const res = Math.sqrt(el);
            if (Number.isInteger(res)) {
                return res;
            } else {
                return el * el;
            }
        }
    );
}
