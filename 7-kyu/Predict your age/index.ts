export function predictAge(age1: number, age2: number, age3: number, age4: number, age5: number, age6: number, age7: number, age8: number): number {
    const sum = age1 * age1 + age2 * age2 + age3 * age3 + age4 * age4 + age5 * age5 + age6 * age6 + age7 * age7 + age8 * age8;
    return Math.floor(Math.sqrt(sum) / 2);
}