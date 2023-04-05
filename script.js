const COLORS = {
  black: 0,
  brown: 1,
  red: 2,
  orange: 3,
  yellow: 4,
  green: 5,
  blue: 6,
  violet: 7,
  grey: 8,
  white: 9,
};

const colorCode = (color) => {
  if (typeof color === 'object') {
    let arr = [];

    Object.keys(color).forEach(function (key, index) {
      arr.push(key);
    });

    return arr.sort();
  }

  return COLORS[color];
};

console.log(colorCode('red'));
console.log(
  colorCode({
    black: 0,
    blue: 6,
    brown: 1,
    green: 5,
    grey: 8,
    orange: 3,
    red: 2,
    violet: 7,
    white: 9,
    yellow: 4,
  }),
);
