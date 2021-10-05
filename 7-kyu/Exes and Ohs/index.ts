export function xo(str: string) {
    return (str.match(/o/ig) || []).length === (str.match(/x/ig) || []).length
}