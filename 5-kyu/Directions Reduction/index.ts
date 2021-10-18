export function dirReduc(arr: string[]): string[] {
    let str = arr.join('');
    const pattern = /NORTHSOUTH|EASTWEST|SOUTHNORTH|WESTEAST/;
    while (pattern.test(str)) {
        str = str.replace(pattern, '');
    }
    return str.match(/(NORTH|SOUTH|EAST|WEST)/g) || [];
}