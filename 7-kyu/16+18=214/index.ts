export function add(num1: number, num2: number): number {
    const n1 = String(num1).split('').map(Number).reverse();
    const n2 = String(num2).split('').map(Number).reverse();
    let res = [];
    const maxNum = String(Math.max(num1, num2)).length;
    for (let i = 0; i < maxNum; i++) {
        res.push((n1[i] || 0) + (n2[i] || 0))
    }
    return Number(res.reverse().join(''));
}