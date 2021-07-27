import { checkExam } from './index';

test('should return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, If the score < 0, return 0', () => {
    expect(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"])).toBe(6);
    expect(checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""])).toBe(7);
    expect(checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"])).toBe(16);
    expect(checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"])).toBe(0);
})
