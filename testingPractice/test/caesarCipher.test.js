const caesarCipher = require('../code/caesarCipher');

test('give func str nums and num', () => {
  expect(caesarCipher('abc', 20)).toBe('uvw');
});
