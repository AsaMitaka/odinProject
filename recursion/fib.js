const fibs = (nums) => {
  let arr = [0, 1];

  if (nums <= 0) return 'Nums less or equal zero';
  if (nums === 1) return [0];
  if (nums === 2) return arr;
  let a = 0;
  let b = 1;
  for (let i = 2; i < nums; i++) {
    c = a + b;
    arr.push(c);
    a = b;
    b = c;
  }

  return arr;
};
