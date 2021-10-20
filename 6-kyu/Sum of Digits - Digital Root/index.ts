export const digitalRoot = (n:number):number => {
    if (n === 0) return n
    const pointPosition = String(n / 9).indexOf('.')
    return n % 9 === 0 ? 9 : +String(n / 9).charAt(pointPosition + 1)
};