export function vertMirror(string: string) {
    return string
        .split('\n')
        .map(str => str.split('').reverse().join(''))
        .join('\n')
}
export function horMirror(string: string) {
    return string
        .split('\n')
        .reverse()
        .join('\n')
}
export function oper(fct: (s: string) => string, s: string) {
    return fct(s)
}