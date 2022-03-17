export function growingPlant(up: number, down: number, h: number): number {
    let meters = 0;
    let day = 0;
    while (meters < h) {
        day++;
        meters += up;
        if (meters >= h) return day;
        meters -= down;
    }
    return day;
}