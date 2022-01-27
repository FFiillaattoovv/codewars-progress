import { checkCoupon } from './index';

test('should verifies that a coupon code is valid and not expired', () => {
    expect(checkCoupon('123','123','September 5, 2014','October 1, 2014')).toBe(true);
    expect(checkCoupon('123a','123','September 5, 2014','October 1, 2014')).toBe(false);
    expect(checkCoupon('123', '123', 'July 9, 2015', 'July 2, 2015')).toBe(false);
})