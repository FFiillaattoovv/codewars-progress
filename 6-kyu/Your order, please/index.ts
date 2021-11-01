export function order(words: string): string {
    if (!words) return ''
    const arr = words.split(' ')
    let res = ''
    for (let i = 1; i <= arr.length; i++) {
        res += arr.find(word => word.includes(String(i))) + ' '
    }
    return res.trim()
}