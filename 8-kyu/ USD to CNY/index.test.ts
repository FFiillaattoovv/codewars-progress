import { usdcny } from './index';

test('should converts US dollars (USD) to Chinese Yuan (CNY)', () => {
    expect(usdcny(15)).toBe('101.25 Chinese Yuan');
    expect(usdcny(465)).toBe('3138.75 Chinese Yuan');
})
