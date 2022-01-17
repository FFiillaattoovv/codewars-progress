import { G964 } from './index';

test('should return max(abs(length(x) − length(y)))', () => {
    expect(G964.mxdiflg(["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"],
            ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"])).toBe(13);
    expect(G964.mxdiflg(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"],
        ["bbbaaayddqbbrrrv"])).toBe(10);
    expect(G964.mxdiflg([], [])).toBe(-1);
})