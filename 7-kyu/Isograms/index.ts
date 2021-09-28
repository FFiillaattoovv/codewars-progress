export function isIsogram(str: string): boolean {
    return str.toLowerCase().replace(/(.)(?=.*\1)/g, "") === str.toLowerCase()
}