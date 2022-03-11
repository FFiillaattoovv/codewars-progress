export function orderedCount(text: string): [string, number][] {
    const arr = text.split('').filter((el, i, arr) => arr.indexOf(el) === i);
    return arr.map((value) => {
        return [value, text.split('').filter(val => val === value).length];
    });
}