const fibsRec = (num) => {
  if (num === 1) return [0];
  if (num === 2) return [0, 1];

  return [...fibsRec(num - 1), fibsRec(num - 1)[num - 2] + fibsRec(num - 1)[num - 3]];
};

console.log(fibsRec(5));
console.log(fibsRec(4));
console.log(fibsRec(3));
console.log(fibsRec(8));
