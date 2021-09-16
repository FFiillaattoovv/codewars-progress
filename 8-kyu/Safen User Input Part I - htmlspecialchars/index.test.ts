import { htmlspecialchars } from './index';

test('should escape special characters', () => {
    expect(htmlspecialchars('abc')).toBe('abc');
    expect(htmlspecialchars('<h2>Hello World</h2>')).toBe('&lt;h2&gt;Hello World&lt;/h2&gt;');
    expect(htmlspecialchars('How was "The Matrix"?  Did you like it?')).toBe('How was &quot;The Matrix&quot;?  Did you like it?');
    expect(htmlspecialchars('<script>alert(\'Website Hacked!\');</script>')).toBe('&lt;script&gt;alert(\'Website Hacked!\');&lt;/script&gt;');
})
