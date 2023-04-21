const reverseString = require('../code/reverseString');

test('Give func str', () => {
  expect(reverseString('AbbA')).toBe('AbbA');
});

test('Give func str', () => {
  expect(reverseString('fssffssf')).toBe('fssffssf');
});
