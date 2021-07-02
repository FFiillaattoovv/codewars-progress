export function betterThanAverage(classPoints: number[], yourPoints: number) {
    return classPoints.reduce((accum, curr) => accum + curr) / classPoints.length < yourPoints;
}
