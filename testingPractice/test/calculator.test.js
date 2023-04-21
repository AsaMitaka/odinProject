const calculator = require('../code/calculator');

test('give func two nums and operator', () => {
  expect(calculator(1, 2, '+')).toBe(3);
});
