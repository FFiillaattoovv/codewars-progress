export function duplicateCount(text: string): number{
    const str = text.toLowerCase();
    const a = new Set(str.split(''));
    const result = [];
    a.forEach(e => {
        if (str.split(e).length - 1 >= 2) {
            result.push(e + e);
        }
    });
    return result.length;
}