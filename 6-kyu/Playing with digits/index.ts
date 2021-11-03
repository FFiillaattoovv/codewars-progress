export class G964 {

    public static digPow = (n: number, p: number) => {
        const res = String(n)
            .split('')
            .map((a, i) => Number(a) ** (p + i))
            .reduce((prev, curr) => prev + curr);

        return Number.isInteger(res / n) ? res / n : -1;
    }
}