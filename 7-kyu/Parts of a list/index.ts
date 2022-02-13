export class G964 {
    public static partlist(arr: string[]): string[][] {
        return arr
            .map((v, i) => [arr.slice(0, i).join(' '), arr.slice(i).join(' ')])
            .slice(1);
    }
}