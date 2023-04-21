const capitalize = (str) => {
  if (typeof str !== 'string') {
    return 'Isnt string';
  }

  return str[0].toUpperCase() + str.slice(1);
};

module.exports = capitalize;
