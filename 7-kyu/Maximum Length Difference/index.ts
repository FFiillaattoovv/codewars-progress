export class G964 {

    public static mxdiflg = (a1, a2) => {
        if (a1.length === 0 || a2.length === 0) return -1;
        const n1 = a1.map(str => str.length);
        const n2 = a2.map(str => str.length);
        return Math.max(Math.max(...n1) - Math.min(...n2), Math.max(...n2) - Math.min(...n1));
    };
}