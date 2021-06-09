export function abbrevName(name: string): string {
    let res = name[0];
    for (let i = 0; i < name.length; i++) {
        name[i] ===  ' ' ? res += '.' + name[i + 1] : res;
    }
    return res.toUpperCase();
}