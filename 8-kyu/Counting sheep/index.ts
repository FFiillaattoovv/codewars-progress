export function countSheeps(arrayOfSheep: (boolean | undefined | null)[]) {
    let count = 0;
    arrayOfSheep.forEach(function(item) {
        item ? count++ : count;
    });
    return count;
}