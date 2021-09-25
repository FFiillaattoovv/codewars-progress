import { descendingOrder } from './index';

test('should rearrange the digits to create the highest possible number', () => {
    expect(descendingOrder(42145)).toBe(54421);
    expect(descendingOrder(145263)).toBe(654321);
    expect(descendingOrder(123456789)).toBe(987654321);
})