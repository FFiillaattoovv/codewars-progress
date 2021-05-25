export const makeNegative = (num: number): number => {
    return !num ? num : (num < 0) ? num : -num;
};