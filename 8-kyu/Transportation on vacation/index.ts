export function rentalCarCost(d: number): number {
    switch (true) {
        case d < 3:
            return d * 40;
        case d >= 3 && d < 7:
            return d * 40 - 20;
        default:
            return d * 40 - 50;
    }
}