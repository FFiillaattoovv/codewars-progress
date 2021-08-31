import { Kata } from './index';

test('String Template feature should be works as expects', () => {
    expect(Kata.buildString('Cheese','Milk','Chocolate')).toBe('I like Cheese, Milk, Chocolate!');
    expect(Kata.buildString('Chocolate')).toBe('I like Chocolate!');
})
