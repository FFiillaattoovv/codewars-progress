import { vertMirror, horMirror, oper } from './index';

test('should transformations strings', () => {
    expect(vertMirror('hSgdHQ\\nHnDMao\\nClNNxX\\niRvxxH\\nbqTVvA\\nwvSyRu')).toBe('QHdgSh\\noaMDnH\\nXxNNlC\\nHxxvRi\\nAvVTqb\\nuRySvw');
    expect(horMirror('lVHt\\nJVhv\\nCSbg\\nyeCt')).toBe('yeCt\\nCSbg\\nJVhv\\nlVHt');
    expect(oper(vertMirror, 'hSgdHQ\\nHnDMao\\nClNNxX\\niRvxxH\\nbqTVvA\\nwvSyRu')).toBe('QHdgSh\\noaMDnH\\nXxNNlC\\nHxxvRi\\nAvVTqb\\nuRySvw');
})