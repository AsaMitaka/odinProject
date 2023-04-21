const analyzeArray = (arr) => {
  if (!Array.isArray(arr)) return 'Isnt array';

  let object = {
    average: 0,
    min: arr[0],
    max: arr[0],
    length: arr.length,
  };
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < object.min) {
      object.min = arr[i];
    }

    if (arr[i] > object.max) {
      object.max = arr[i];
    }

    sum += arr[i];
  }
  object.average = Math.floor(sum / arr.length);

  return object;
};

module.exports = analyzeArray;
