import { findNeedle } from './index';

test('should return a message (as a string) plus the index it found the needle', () => {
    expect(findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])).toBe("found the needle at position 5");
    expect(findNeedle(['needle', 'randomJunk'])).toBe("found the needle at position 0");
    expect(findNeedle([1,2,3,4,5,6,7,8,8,7,5,4,3,4,5,6,67,5,5,3,3,4,2,34,234,23,4,234,324,324,'needle',1,2,3,4,5,5,6,5,4,32,3,45,54])).toBe('found the needle at position 30');
})