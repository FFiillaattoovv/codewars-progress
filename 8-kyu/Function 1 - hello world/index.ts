export function greet(): string {
    let str = 'hello world!';
    let arr = [];
    for (let i = 0; i < str.length; i++) {
        arr.push(str.charCodeAt(i));
    }
    return String.fromCharCode.apply(null, arr);
}