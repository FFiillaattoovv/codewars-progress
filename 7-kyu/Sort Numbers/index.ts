export function solution(nums: number[]): number[] {
    return nums.length === 0 ? nums : nums.sort((a, b) => a - b);
}