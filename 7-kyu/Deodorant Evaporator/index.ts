export function evaporator(content: number, evapPerDay: number, threshold: number): number {
    let res = 0;
    let percent = 100;
    while (percent > threshold) {
        percent -= percent * (evapPerDay / 100);
        res += 1;
    }
    return res;
}