const capitalize = require('../code/capitalize');

test('give func str', () => {
  expect(capitalize('str')).toBe('Str');
});
