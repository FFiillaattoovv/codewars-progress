export const minValue = (values: number[]): number => {
    return Number(values
        .filter((item, index) => values.indexOf(item) === index)
        .sort((a, b) => a - b)
        .join(''));
};