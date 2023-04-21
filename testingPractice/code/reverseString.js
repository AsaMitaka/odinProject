const reverseString = (str) => {
  if (typeof str !== 'string') return 'its not error';
  return str.split('').reverse().join('');
};

module.exports = reverseString;
