export function number(busStops: [number, number][]): number {
    return busStops
        .map((arr) => arr[0] - arr[1])
        .reduce((a, b) => a + b);
}