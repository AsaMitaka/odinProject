const caesarCipher = (str, num) => {
  if (typeof str !== 'string' || typeof num !== 'number') {
    return 'Invalid input';
  }

  let result = '';
  const alph = 'abcdefghijklmnopqrstuvwxyz';
  const shiftedAlphabet = alph.slice(num) + alph.slice(0, num);

  for (let i = 0; i < str.length; i++) {
    const char = str[i].toLowerCase();
    const index = alph.indexOf(char);

    if (index !== -1) {
      const shiftedChar = shiftedAlphabet[index] || shiftedAlphabet[index - 26];
      result += str[i] === str[i].toUpperCase() ? shiftedChar.toUpperCase() : shiftedChar;
    } else {
      result += str[i];
    }
  }

  return result;
};

module.exports = caesarCipher;
