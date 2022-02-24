export function solve(arr: string[]) {
    enum Alphabet {
        a,
        b,
        c,
        d,
        e,
        f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        n,
        o,
        p,
        q,
        r,
        s,
        t,
        u,
        v,
        w,
        x,
        y,
        z
    }

    return arr
        .map(word => word.toLowerCase()
            .split('')
            .filter((ch, i) => Alphabet[ch] === i)
            .length);
}