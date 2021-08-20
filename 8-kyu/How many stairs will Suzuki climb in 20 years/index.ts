export function stairsIn20(stairs) {
    return [...stairs[0], ...stairs[1],...stairs[2],...stairs[3],...stairs[4],...stairs[5],...stairs[6]].reduce((prev, curr) => prev + curr) * 20;
}
