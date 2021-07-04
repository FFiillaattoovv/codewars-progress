export function countSheep(num: number): string {
    let count = 1;
    let str = '';

    for (let i = 0; i < num; i++) {
        str +=`${count++} sheep...`;
    }

    return str;
}
