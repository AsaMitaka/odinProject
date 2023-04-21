const calculator = (a, b, op) => {
  if (typeof a !== 'number' || typeof b !== 'number') return 'num1 or num2 is not number';

  switch (op) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '/':
      return a / b;
    case '*':
      return a * b;
    default:
      return 'op is not defined';
  }
};

module.exports = calculator;
