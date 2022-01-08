export class G964 {
    public static nbDig(n: number, d: number): number {
        const arr = [];
        for (let i = 0; i <= n; i++) {
            arr.push(i ** 2);
        }
        return arr
            .join('')
            .split('')
            .filter(el => +el === d).length;
    }
}