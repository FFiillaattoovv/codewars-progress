import { cockroachSpeed } from './index';

test('speed in km per hour should return in cm per second', () => {
    expect(cockroachSpeed(1.08)).toBe(30);
    expect(cockroachSpeed(1.09)).toBe(30);
    expect(cockroachSpeed(0)).toBe(0);
    expect(cockroachSpeed(2.9878936522247406)).toBe(82);
})
