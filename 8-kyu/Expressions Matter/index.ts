export function expressionsMatter(a: number, b: number, c: number): number {
    let max = a * (b + c);

    let curr = a * b * c;
    if (curr > max) max = curr;

    curr = a + b * c;
    if (curr > max) max = curr;

    curr = (a + b) * c;
    if (curr > max) max = curr;

    curr = a + b + c;
    if (curr > max) max = curr;

    return max;
}
