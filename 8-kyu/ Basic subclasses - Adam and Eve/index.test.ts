import { God, Man, Woman } from './index';

test('The first object in the array should be an instance of the class Man. The second should be an instance of the class Woman. Both objects have to be subclasses of Human', () => {
    const humans = God.create()
    expect(humans[0] instanceof Man).toBe(true);
    expect(humans[1] instanceof Woman).toBe(true);
})
